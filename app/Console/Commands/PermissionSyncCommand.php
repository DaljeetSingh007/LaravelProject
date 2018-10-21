<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use RoleHasPermission;
use Permission;

class PermissionSyncCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'glorious:permission-sync';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Used to sync system permission with database from GloriousPermission config file.';

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
        if ($this->confirm('Are you sure? This action will delete all permissions.')) {
            DB::statement('SET FOREIGN_KEY_CHECKS = 0'); // Remove FOREIGN_KEY_CHECKS and truncate table
            // RoleHasPermission::truncate(); 
            Permission::truncate();
            DB::statement('SET FOREIGN_KEY_CHECKS = 1');
            $permissions = config('glorious_permissions');
            foreach ($permissions as $permission_key => $permission_value) {
                foreach ($permission_value['data'] as $permission_key => $permission) {
                    $permissionObj                     = new Permission;
                    $permissionObj->name               = $permission['permission'];
                    $permissionObj->guard_name         = 'web';
                    $permissionObj->display_name       = $permission['label'];
                    $permissionObj->save();
                }
            }
            echo 'Permission table refreshed.';
        } else {
            echo 'Pretended Action.';
        }

        return true;
    }
}
