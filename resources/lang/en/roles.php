<?php

return [
    /*
    |--------------------------------------------------------------------------
    | File For Role Module
    |--------------------------------------------------------------------------
    |
    */
    'module'       => 'Role',
    'module_title' => 'Roles',

    'listing_heading' => 'List',
    'add_heading'     => 'Add',
    'edit_heading'    => 'Edit',

    /**
     * For Inputs
     */
    'input_name'        => 'Name:',
    'input_module'      => 'Modules',
    'input_permissions' => 'Permissions',

    /**
     * Label
     */
    'add_role' => 'Add Role',

    /**
     * Columns
     */
    'column_heading' => [
        'sr_no'            => '#',
        'name'             => 'Name',
        'permissions'      => 'Permissions',
        'action'           => 'Action',
    ],

    /*
    |--------------------------------------------------------------------------
    | DELETE POPUP
    |--------------------------------------------------------------------------
    */
    'popup' => [
        'buttonLabel' => '<i class="la la-trash"></i>',
        'alert'       => [
            'title'     => 'Delete Role',
            'message'   => 'Are you sure to delete this Role?',
            'buttonYes' => trans('common.yes'),
            'buttonNo'  => trans('common.no'),
        ],
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
            'success' => 'Role :name has been created.',
            'error'   => 'Getting error while inserting Role. Please Contact Admin.',
        ],

        /*
        |--------------------------------------------------------------------------
        | Update Message
        |--------------------------------------------------------------------------
        */
        'edit' => [
            'success' => 'Role :name has been updated.',
            'error'   => 'Getting error while updating Role. Please Contact Admin.',
        ],

        /*
        |--------------------------------------------------------------------------
        | Destroy Message
        |--------------------------------------------------------------------------
        */
        'destroy' => [
            'success'    => 'Role :name has been deleted.',
            'error'      => 'Getting error while deleting Role. Please Contact Admin.',
            'error_self' => 'You can\'t delete your self',
        ],

        /*
        |--------------------------------------------------------------------------
        | Destroy POPUP
        |--------------------------------------------------------------------------
        */
        'delete_alert' => [
            'title'     => 'Delete Role',
            'message'   => 'Are you sure want to this item ?',
            'buttonYes' => 'Yes',
            'buttonNo'  => 'No',
        ],
    ],

    'common' => trans('common'),
];
