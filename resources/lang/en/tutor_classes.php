<?php

return [
    /*
    |--------------------------------------------------------------------------
    | After Tutor Login
    |--------------------------------------------------------------------------
    |
    */
    'module'       => 'Tutor Class',
    'module_title' => 'Tutor Classes',

    'listing_heading' => 'List',
    'my_stream'       => 'My stream',
    'students'        => 'Students',

    /**
     * Columns
     */
    'column_heading' => [
        'sr_no'           => '#',
        'name'            => 'Class Name',
        'students'        => 'Students Name',
        'start_time'      => 'Start Time',
        'estimated_time'  => 'Estimate Class Time',
        'status'          => 'Status',
        'action'          => 'Action',
    ],

    'status' => [
        0 => 'Error',
        1 => 'Expired',
        2 => 'Today',
        3 => 'Pending',
    ],

    'status_color' => [
        0 => 'm-badge m-badge--brand m-badge--wide m-badge--rounded',
        1 => 'm-badge m-badge--danger m-badge--wide m-badge--rounded',
        2 => 'm-badge m-badge--success m-badge--wide m-badge--rounded',
        3 => 'm-badge m-badge--info m-badge--wide m-badge--rounded',
    ],

    /**
     * For Inputs
     */
    'input_resolution' => 'Resolution',

    'common' => trans('common'),
];
