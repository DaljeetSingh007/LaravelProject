<?php

return [
    'project_name'      => 'Tutor Bank',
    'available_locales' => [
        'en',
        'ar',
    ],
    'date_format' => [
        'class_start_time' => 'd.m.Y H:i',
        'class_end_time'   => 'd.m.Y H:i',
    ],
    'class_status' => [
        0 => 'Pending',
        1 => 'InProgress',
        2 => 'Completed',
    ],
    
    'TUTOR_PUBLIC_KEY' => env('TUTOR_PUBLIC_KEY', 156),
    'TUTOR_PRIVATE_KEY'=> env('TUTOR_PRIVATE_KEY', '50b0c5d0ddda57eebf056590c60787d9'),
];
