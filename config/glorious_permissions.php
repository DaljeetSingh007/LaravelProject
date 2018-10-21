<?php

return [
    /**
     * For User Module
     */
    [
        'label'=> 'Manage Users',
        'data' => [
            [
                'label'      => 'View User',
                'permission' => 'users.view',
            ],
            [
                'label'      => 'Create User',
                'permission' => 'users.create',
            ],
            [
                'label'      => 'Update User',
                'permission' => 'users.update',
            ],
            [
                'label'      => 'Delete User',
                'permission' => 'users.destroy',
            ],
        ],
    ],

    /**
     * For Role Module
     */
    [
        'label'=> 'Manage Roles',
        'data' => [
            [
                'label'      => 'Create Role',
                'permission' => 'roles.create',
            ],
            [
                'label'      => 'View Role',
                'permission' => 'roles.view',
            ],
            [
                'label'      => 'Update Role',
                'permission' => 'roles.update',
            ],
            [
                'label'      => 'Delete Role',
                'permission' => 'roles.destroy',
            ],
        ],
    ],

    /**
     * For Tutor Module
     */
    [
        'label'=> 'Manage Tutors',
        'data' => [
            [
                'label'      => 'Create Tutor',
                'permission' => 'tutors.create',
            ],
            [
                'label'      => 'View Tutor',
                'permission' => 'tutors.view',
            ],
            [
                'label'      => 'Update Tutor',
                'permission' => 'tutors.update',
            ],
            [
                'label'      => 'Delete Tutor',
                'permission' => 'tutors.destroy',
            ],
        ],
    ],

    /**
     * For Student Module
     */
    [
        'label'=> 'Manage Students',
        'data' => [
            [
                'label'      => 'Create Student',
                'permission' => 'students.create',
            ],
            [
                'label'      => 'View Student',
                'permission' => 'students.view',
            ],
            [
                'label'      => 'Update Student',
                'permission' => 'students.update',
            ],
            [
                'label'      => 'Delete Student',
                'permission' => 'students.destroy',
            ],
        ],
    ],

    /**
     * For Class Module
     */
    [
        'label'=> 'Manage Class',
        'data' => [
            [
                'label'      => 'Create Class',
                'permission' => 'classes.create',
            ],
            [
                'label'      => 'View Class',
                'permission' => 'classes.view',
            ],
            [
                'label'      => 'Update Class',
                'permission' => 'classes.update',
            ],
            [
                'label'      => 'Delete Class',
                'permission' => 'classes.destroy',
            ],
        ],
    ],

    /**
     * For AssignedClass Module
     */
    [
        'label'=> 'To See Assigned Class (For Tutors)',
        'data' => [
            [
                'label'      => 'View Assigned Class',
                'permission' => 'tutor_assigned_classes.view',
            ],
            [
                'label'      => 'Take Action',
                'permission' => 'tutor_assigned_classes.update',
            ],
        ],
    ],

    /**
     * For AssignedClass Module
     */
    [
        'label'=> 'To See Assigned Class (For Student)',
        'data' => [
            [
                'label'      => 'View Assigned Class',
                'permission' => 'student_assigned_classes.view',
            ],
            [
                'label'      => 'Take Action',
                'permission' => 'student_assigned_classes.update',
            ],
        ],
    ],
];
