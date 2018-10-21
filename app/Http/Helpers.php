<?php

namespace App\Http;

use Route;
use Role;
use Tutor;
use Student;

/**
 * This class is global withing app to get helper function
 */
class Helpers
{
    /**
     * To set App Locale and Replace URL
     * @param string $locale Parameter for current localization ISO Code
     * @return mixed
     */
    public function setLocale($locale)
    {
        $previous = app('url')->previous();
        $next     = str_replace(url('/'), '', $previous);
        $tmp      = explode('/', $next);
        array_shift($tmp);
        array_shift($tmp);
        $next = $locale . '/' . implode('/', $tmp);

        return redirect($next);
    }

    /**
     * Method will pass active if current route match with @param
     *
     * @param array $routes
     * @param string $className
     * @return string
     */
    public static function getActiveRouteState($routes = [], $className = 'active')
    {
        if (in_array(Route::currentRouteName(), $routes)) {
            return $className;
        }

        return '';
    }

    /**
     * Method will replace all special characters and space with dash
     *
     * @param string $str
     * @param string $delimeter pass your own character to replace
     * @return string
     */
    public static function generateSlug($str, $delimiter = '-')
    {
        $slug = strtolower(trim(preg_replace('/[\s-]+/', $delimiter, preg_replace('/[^A-Za-z0-9-]+/', $delimiter, preg_replace('/[&]/', 'and', preg_replace('/[\']/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $str))))), $delimiter));

        return $slug;
    }

    /**
     * Method will return Roles
     *
     * @param boolean $forSuperAdmin If yes then it will return superadmin role also
     * @return collection
     */
    public static function getRoles($forSuperAdmin = false)
    {
        if ($forSuperAdmin == true) {
            $roles = Role::get();
        } else {
            $roles = Role::public()->get();
        }

        return self::vueDropdown($roles, 'id', 'display_name');
    }

    /**
     * to pass in vue js
     * @param array $array
     * @param string $key
     * @param string $value
     * @return array
     */
    public static function vueDropdown($array, $key, $value)
    {
        $response_array = [];
        if ($array) {
            foreach ($array as $array_key => $array_value) {
                $response_array[] = [
                    'id'   => $array_value[$key],
                    'name' => $array_value[$value],
                ];
            }
        }

        return $response_array;
    }

    /**
     * Method will return tutors with vuejs format
     *
     * @param $boolean vueFormat Format type default for vue js
     * @return array
     */
    public static function getTutors($vueFormat = true)
    {
        $entities = [];
        $entities = Tutor::active()->select(['first_name', 'last_name', 'id'])->get();
        if (!$vueFormat) {
            $_entities = [];
            foreach ($entities as $key => $value) {
                $_entities[$value->id] = $value->full_name;
            }

            return $_entities;
        }

        return self::vueDropdown($entities, 'id', 'full_name');
    }

    /**
     * Method will return tutors with vuejs format
     *
     * @param $boolean vueFormat Format type default for vue js
     * @return array
     */
    public static function getStudents($vueFormat = true)
    {
        $entities = [];
        $entities = Student::active()->select(['first_name', 'last_name', 'id'])->get();
        if (!$vueFormat) {
            $_entities = [];
            foreach ($entities as $key => $value) {
                $_entities[$value->id] = $value->full_name;
            }

            return $_entities;
        }

        return self::vueDropdown($entities, 'id', 'full_name');
    }

    /**
     * Method will return User Tutor Type
     *
     * @param INT $userType
     * @return string
     */
    public static function getTutorUserType($userType)
    {
        $type = 'student';
        if ($userType == 1) {
            $type = 'admin';
        } elseif ($userType == 2) {
            $type = 'tutor';
        }

        return $type;
    }
}
