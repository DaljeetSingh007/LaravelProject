<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Role;
use User;
use DB;
use Exception;
use Permission;

class MakeTutorRoleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'glorious:make-tutor-role';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Used to create tutor role.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $admin_role = Role::firstOrCreate([
            'name' => 'glorious-tutor',
        ]);

        $admin_role->display_name = 'System Tutor';
        $admin_role->guard_name   = 'web';
        $admin_role->is_public    = 0;
        $admin_role->save();

        $permissions = Permission::
                        select('id', 'name')
                        ->whereIn('name', [
                            'tutor_assigned_classes.view',
                            'tutor_assigned_classes.update',
                        ])
                        ->get()
                        ->pluck('name', 'id');
        $admin_role->syncPermissions($permissions);

        dump('Tutor Role created now you can insert tutors.');
    }
}
