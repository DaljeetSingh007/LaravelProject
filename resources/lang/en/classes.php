<?php

return [
    /*
    |--------------------------------------------------------------------------
    | File For Class Module
    |--------------------------------------------------------------------------
    |
    */
    'module'       => 'Class',
    'module_title' => 'Classes',

    'listing_heading' => 'List',
    'add_heading'     => 'Add',
    'edit_heading'    => 'Edit',

    /**
     * For Inputs
     */
    'input_name'           => 'Name:',
    'input_start_time'     => 'Start Time:',
    'input_end_time'       => 'End Time:',
    'input_estimated_time' => 'Estimate Hours:',
    'input_notes'          => 'Notes:',
    'input_tutor'          => 'Tutor:',
    'input_students'       => 'Students:',
    'input_notes'          => 'Note:',

    /**
     * Columns
     */
    'column_heading' => [
        'sr_no'          => '#',
        'name'           => 'Name',
        'start_time'     => 'Start Time',
        'end_time'       => 'End Time',
        'estimated_time' => 'Estimate Hours',
        'tutor'          => 'Tutor',
        'student'        => 'Student',
        'action'         => 'Action',
    ],

    /*
    |--------------------------------------------------------------------------
    | DELETE POPUP
    |--------------------------------------------------------------------------
    */
    'popup' => [
        'buttonLabel' => '<i class="fa fa-trash"></i>',
        'alert'       => [
            'title'     => 'Delete Class',
            'message'   => 'Are you sure to delete this Class?',
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
            'success' => 'Class :name has been created.',
            'error'   => 'Getting error while inserting Class. Please Contact Admin.',
        ],

        /*
        |--------------------------------------------------------------------------
        | Update Message
        |--------------------------------------------------------------------------
        */
        'edit' => [
            'success' => 'Class :name has been updated.',
            'error'   => 'Getting error while updating Class. Please Contact Admin.',
        ],

        /*
        |--------------------------------------------------------------------------
        | Destroy Message
        |--------------------------------------------------------------------------
        */
        'destroy' => [
            'success'    => 'Class :name has been deleted.',
            'error'      => 'Getting error while deleting Class. Please Contact Admin.',
            'error_self' => 'You can\'t delete your self',
        ],

        /*
        |--------------------------------------------------------------------------
        | Destroy POPUP
        |--------------------------------------------------------------------------
        */
        'delete_alert' => [
            'title'     => 'Delete Class',
            'message'   => 'Are you sure want to this item ?',
            'buttonYes' => 'Yes',
            'buttonNo'  => 'No',
        ],
    ],

    'common' => trans('common'),
];
