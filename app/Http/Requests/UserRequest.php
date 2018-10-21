<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Route;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->get('id', null);
        switch (Route::currentRouteName()) {
            case 'users.create':
            case 'users.store':
            {
                return [
                    'email'      => 'required|email|max:100|unique:users,email,' . $id . ',uuid|eliminate_script',
                    'first_name' => 'required|max:100|eliminate_script',
                    'last_name'  => 'required|max:100|eliminate_script',
                    'password'   => 'required|confirmed|min:6|eliminate_script',
                ];
            }
            case 'users.edit':
            case 'users.update':
            {
                return [
                    'email'      => 'required|email|max:100|unique:users,email,' . $id . ',uuid|eliminate_script',
                    'password'   => 'nullable|confirmed|min:6|eliminate_script',
                    'first_name' => 'required|max:100|eliminate_script',
                    'last_name'  => 'required|max:100|eliminate_script',
                ];
            }
            case 'users.destroy':
            case 'users.index':
            case 'users.show':
            {
                return [];
            }
            default:break;
        }
    }

    /**
     * Handle a failed validation attempt.
     *
     * @param  \Illuminate\Contracts\Validation\Validator  $validator
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function failedValidation(Validator $validator)
    {
        if ($this->ajax() || $this->wantsJson()) {
            $response = new JsonResponse($validator->errors(), 422);
            throw new ValidationException($validator, $response);
        }

        throw (new ValidationException($validator))
                    ->errorBag($this->errorBag)
                    ->redirectTo($this->getRedirectUrl());
    }
}
