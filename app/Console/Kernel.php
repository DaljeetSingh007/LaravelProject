<?php

namespace App\Console;

use App\Console\Commands\PermissionSyncCommand;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Console\Commands\MakeSuperAdminCommand;
use App\Console\Commands\MakeAdminRoleCommand;
use App\Console\Commands\MakeTutorRoleCommand;
use App\Console\Commands\MakeStudentRoleCommand;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        PermissionSyncCommand::class,
        MakeAdminRoleCommand::class,
        MakeSuperAdminCommand::class,
        MakeStudentRoleCommand::class,
        MakeTutorRoleCommand::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
