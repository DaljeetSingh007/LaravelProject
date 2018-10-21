<?php

return [
    /*
    |--------------------------------------------------------------------------
    | File For Tutor Module
    |--------------------------------------------------------------------------
    |
    */
    'module'       => 'Tutor',
    'module_title' => 'Tutors',

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
    'password_confirmation'       => 'Confirm Password:',
    'input_status'                => 'Status',
    'input_intro'                 => 'Intro:',

    /**
     * Label
     */
    'add_user' => 'Add Tutor',

    /**
     * Columns
     */
    'column_heading' => [
        'sr_no'      => '#',
        'first_name' => 'First Name',
        'last_name'  => 'Last Name',
        'email'      => 'Email',
        'active'     => 'Status',
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
            'title' => 'Delete Tutor',
            'message' => 'Are you sure to delete this Tutor?',
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
            'success' => 'Tutor :name has been created.',
            'error' => 'Getting error while inserting Tutor. Please Contact Admin.',
        ],

        /*
        |--------------------------------------------------------------------------
        | Update Message
        |--------------------------------------------------------------------------
        */
        'edit' => [
            'success' => 'Tutor :name has been updated.',
            'error' => 'Getting error while updating Tutor. Please Contact Admin.',
        ],

        /*
        |--------------------------------------------------------------------------
        | Destroy Message
        |--------------------------------------------------------------------------
        */
        'destroy' => [
            'success' => 'Tutor :name has been deleted.',
            'error' => 'Getting error while deleting Tutor. Please Contact Admin.',
            'dependent_error' => 'Record can not be deleted because of relevant and connected data (e.g. Class).',
            'error_self' => 'You can\'t delete your self',
        ],

        /*
        |--------------------------------------------------------------------------
        | Destroy POPUP
        |--------------------------------------------------------------------------
        */
        'delete_alert' => [
            'title' => 'Delete Tutor',
            'message' => 'Are you sure want to this item ?',
            'buttonYes' => 'Yes',
            'buttonNo' => 'No',
        ]
    ],

    'common' => trans('common'),

];
