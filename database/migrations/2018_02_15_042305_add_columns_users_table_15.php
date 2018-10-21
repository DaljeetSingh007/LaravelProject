<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnsUsersTable15 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('active')->default(false)->after('is_master');
            $table->dateTime('banned_at')->nullable()->after('last_login_at');
        });
        
        Schema::table('deleted_users', function (Blueprint $table) {
            $table->boolean('is_master')->default(false)->after('current_user_id');
            $table->boolean('active')->default(false)->after('is_master');
            $table->dateTime('banned_at')->nullable()->after('last_login_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('active');
            $table->dropColumn('banned_at');
        });

        Schema::table('deleted_users', function (Blueprint $table) {
            $table->dropColumn('is_master');
            $table->dropColumn('active');
            $table->dropColumn('banned_at');
        });
    }
}
