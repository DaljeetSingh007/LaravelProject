<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeletedUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deleted_users', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
            $table->integer('current_user_id')->unsigned()->index();
            $table->string('current_user_email')->collate('utf8_unicode_ci');
            $table->string('first_name')->collate('utf8_unicode_ci');
            $table->string('last_name')->collate('utf8_unicode_ci');
            $table->string('email')->collate('utf8_unicode_ci');
            $table->string('password');
            $table->string('last_login_ip')->nullable();
            $table->string('uuid', 100)->collate('utf8_unicode_ci')->nullable()->index();
            $table->string('user_uuid', 100)->collate('utf8_unicode_ci')->nullable()->index();
            $table->dateTime('user_updated_at')->nullable();
            $table->dateTime('user_created_at')->nullable();
            $table->dateTime('last_login_at')->nullable();
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('deleted_users');
    }
}
