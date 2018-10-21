<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->tinyInteger('is_master', false)->default(0);
            $table->string('first_name')->collate('utf8_unicode_ci');
            $table->string('last_name')->collate('utf8_unicode_ci');
            $table->string('email')->collate('utf8_unicode_ci');
            $table->string('password')->nullable();
            $table->string('last_login_ip')->nullable();
            $table->rememberToken();
            $table->string('uuid', 100)->collate('utf8_unicode_ci')->nullable()->index();
            $table->dateTime('last_login_at')->nullable();
            $table->timestamps();
            $table->engine = 'InnoDB';
            $table->unique(['email']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
