<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Role;
use Permission;

class MakeAdminRoleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'glorious:make-admin-role';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Used to create super admin role.';

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
            'name' => 'glorious-admin',
        ]);

        $admin_role->display_name = 'System Admin';
        $admin_role->guard_name   = 'web';
        $admin_role->is_public    = 0;
        $admin_role->save();

        $permissions = Permission::select('id', 'name')->get()->pluck('name', 'id');
        $admin_role->syncPermissions($permissions);
        dump('SuperAdmin Role created now you can insert user.');
    }
}
