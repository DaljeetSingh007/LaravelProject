<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Route;

class RoleRequest extends FormRequest
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
            case 'roles.create':
            case 'roles.store':
            {
                return [
                    'name' => "required|unique:roles,name,{$id},id|max:100|eliminate_script",
                ];
            }
            case 'roles.edit':
            case 'roles.update':
            {
                return [
                    'name' => "required|unique:roles,name,{$id},id|max:100|eliminate_script",
                ];
            }
            case 'roles.destroy':
            case 'roles.index':
            case 'roles.show':
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
