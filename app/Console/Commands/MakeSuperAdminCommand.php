<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Role;
use User;
use DB;
use Exception;

class MakeSuperAdminCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'glorious:make-superadmin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'To create new master or superadmin user.';

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
        // Check Super Admin Role Exist
        $role = Role::whereName('glorious-admin')->first();
        if (is_null($role) || empty($role)) {
            dump("Whoops Role not found. Please run 'php artisan glorious:make-admin-role' command. To Create SuperAdmin Role and then try again.");
            die;
        }

        // Get Input and check email is unique
        $input            = $this->askInputs();
        $_user            = User::whereEmail($input['email'])->count();
        if ($_user > 0) {
            dump('Whoops Seems like Email Already exists.');
            die;
        }

        try {
            DB::beginTransaction();
            $user             = new User;
            $user->is_master  = 1;
            $user->first_name = $input['first_name'];
            $user->last_name  = $input['last_name'];
            $user->email      = $input['email'];
            $user->password   = $input['password'];
            $user->save();
            $user->assignRole('glorious-admin');
            DB::commit();
            dump('User create Successful.');
        } catch (Exception $e) {
            DB::rollback();
            dump('Whoops Getting an error. Make sure you created Super admin role.');
        }

        die;
    }

    /**
     *  Method Used to ask inputs from user
     *  @return array
     */
    public function askInputs()
    {
        $input               = [];
        $fname               = $this->ask('Enter your First Name:');
        $input['first_name'] = $fname;

        $lname              = $this->ask('Enter your Last Name:');
        $input['last_name'] = $lname;

        $email          = $this->ask('Enter valid email:');
        $input['email'] = $email;

        $password          = $this->ask('Choose password:');
        $input['password'] = $password;

        return $input;
    }
}
