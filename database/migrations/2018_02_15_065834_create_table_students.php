<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableStudents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->integer('author_id')->unsigned()->index();
            $table->integer('user_id')->unsigned()->index();
            $table->boolean('active')->default(false);
            $table->string('first_name')->collate('utf8_unicode_ci');
            $table->string('last_name')->collate('utf8_unicode_ci');
            $table->string('email')->collate('utf8_unicode_ci');
            $table->text('intro')->collate('utf8_unicode_ci')->nullable();
            $table->string('uuid', 100)->collate('utf8_unicode_ci')->nullable()->index();
            $table->softDeletes();
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
        Schema::dropIfExists('students');
    }
}
