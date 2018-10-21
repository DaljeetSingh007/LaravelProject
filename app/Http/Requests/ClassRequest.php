<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
use Route;

class ClassRequest extends FormRequest
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
        $id                     = $this->get('id', null);
        switch (Route::currentRouteName()) {
            case 'classes.create':
            case 'classes.store':
            {
                return [
                    'name'           => 'required|min:3|max:100|eliminate_script',
                    'estimated_time' => 'nullable|integer|max:100|eliminate_script',
                    'start_time'     => 'required|date|date_format:d.m.Y H:i|after:yesterday',
                    'end_time'       => 'nullable|date|date_format:d.m.Y H:i|after:start_time',
                    'tutor_id'       => 'required|eliminate_script',
                    'student_id'     => 'required',
                ];
            }
            case 'classes.edit':
            case 'classes.update':
            {
                return [
                    'name'           => 'required|min:3|max:100|eliminate_script',
                    'estimated_time' => 'nullable|integer|max:100|eliminate_script',
                    'start_time'     => 'required|date|date_format:d.m.Y H:i|after:yesterday',
                    'end_time'       => 'nullable|date|date_format:d.m.Y H:i|after:start_time',
                    'tutor_id'       => 'required|eliminate_script',
                    'student_id'     => 'required',
                ];
            }
            case 'classes.destroy':
            case 'classes.index':
            case 'classes.show':
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
