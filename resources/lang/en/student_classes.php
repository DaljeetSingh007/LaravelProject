<?php

return [
    /*
    |--------------------------------------------------------------------------
    | After Student Login
    |--------------------------------------------------------------------------
    |
    */
    'module'       => 'Student Class',
    'module_title' => 'Student Classes',

    'listing_heading' => 'List',
    'my_stream' => 'My stream',
    'tutor' => 'Teacher',

    /**
     * Columns
     */
    'column_heading' => [
        'sr_no'                 => '#',
        'name'                  => 'Class Name',
        'tutor'                 => 'Tutor Name',
        'start_time'            => 'Start Time',
        'estimated_time'        => 'Estimate Class Time',
        'status'                => 'Status',
        'action'                => 'Action',
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

    'common' => trans('common'),
];
