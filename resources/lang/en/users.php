<?php

return [
    /*
    |--------------------------------------------------------------------------
    | File For User Module
    |--------------------------------------------------------------------------
    |
    */
    'module'       => 'User',
    'module_title' => 'Users',

    'listing_heading' => 'List',
    'add_heading'     => 'Add',
    'edit_heading'    => 'Edit',

    /**
     * For Inputs
     */
    'input_email'                 => 'Email:',
    'input_first_name'            => 'First Name:',
    'input_last_name'             => 'Last Name:',
    'input_password'              => 'Password:',
    'input_status'                => 'Status:',
    'input_roles'                 => 'Roles:',
    'password_confirmation'       => 'Confirm Password:',

    /**
     * Label
     */
    'add_user' => 'Add User',

    /**
     * Columns
     */
    'column_heading' => [
        'sr_no'      => '#',
        'first_name' => 'First Name',
        'last_name'  => 'Last Name',
        'email'      => 'Email',
        'last_login' => 'Last Login',
        'active'     => 'Status',
        'roles'      => 'Roles',
        'action'     => 'Action',
    ],

    /*
    |--------------------------------------------------------------------------
    | DELETE POPUP
    |--------------------------------------------------------------------------
    */
    'popup' => [
        'buttonLabel' => '<i class="fa fa-trash"></i>',
        'alert' => [
            'title' => 'Delete User',
            'message' => 'Are you sure to delete this User?',
            'buttonYes' => trans('common.yes'),
            'buttonNo' => trans('common.no'),
        ]
    ],

    /*
    |--------------------------------------------------------------------------
    | Flash message
    |--------------------------------------------------------------------------
    */
    'flash_messages' => [
        /*
        |--------------------------------------------------------------------------
        | Store Message
        |--------------------------------------------------------------------------
        */
        'create' => [
            'success' => 'User :name has been created.',
            'error' => 'Getting error while inserting User. Please Contact Admin.',
        ],

        /*
        |--------------------------------------------------------------------------
        | Update Message
        |--------------------------------------------------------------------------
        */
        'edit' => [
            'success' => 'User :name has been updated.',
            'error' => 'Getting error while updating User. Please Contact Admin.',
        ],

        /*
        |--------------------------------------------------------------------------
        | Destroy Message
        |--------------------------------------------------------------------------
        */
        'destroy' => [
            'success' => 'User :name has been deleted.',
            'error' => 'Getting error while deleting User. Please Contact Admin.',
            'error_self' => 'You can\'t delete your self',
        ],

        /*
        |--------------------------------------------------------------------------
        | Destroy POPUP
        |--------------------------------------------------------------------------
        */
        'delete_alert' => [
            'title' => 'Delete User',
            'message' => 'Are you sure want to this item ?',
            'buttonYes' => 'Yes',
            'buttonNo' => 'No',
        ]
    ],

    'common' => trans('common'),

];
