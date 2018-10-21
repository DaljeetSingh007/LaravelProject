<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClassTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * To Store Class which can be created by admin
         */
        Schema::create('classes', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->integer('author_id')->unsigned()->index();
            $table->string('name')->collate('utf8_unicode_ci')->nullable();
            $table->string('estimated_time', 50)->collate('utf8_unicode_ci')->nullable();
            $table->longText('notes')->collate('utf8_unicode_ci')->nullable();
            $table->string('uuid', 100)->collate('utf8_unicode_ci')->nullable()->index();
            $table->dateTime('start_time')->nullable();
            $table->dateTime('end_time')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->engine = 'InnoDB';
        });

        /**
         * Each class has assigned tutors here I stores assigned tutors
         */
        Schema::create('class_tutors', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->integer('class_id')->unsigned()->index();
            $table->integer('tutor_id')->unsigned()->index();
            $table->softDeletes();
            $table->timestamps();
            $table->engine = 'InnoDB';
        });

        /**
         * Each class has assigned student here I stores assigned students
         */
        Schema::create('class_students', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->integer('class_id')->unsigned()->index();
            $table->integer('student_id')->unsigned()->index();
            $table->softDeletes();
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
        
        /**
         * When Class creates we will create SESSION in OPENTOK server here we store that SessionID
         */
        Schema::create('class_sessions', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->integer('author_id')->unsigned()->index();
            $table->integer('class_id')->unsigned()->index();
            $table->text('session_id')->nullable();
            $table->softDeletes();
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
        
        /**
         * when Session Geneated After that we need to store when Tutor or Student start video class here in this table- 
         * -we will store information of How MANY times user generates token
         */
        Schema::create('class_session_histories', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->integer('author_id')->unsigned()->index();
            $table->integer('class_id')->unsigned()->index();
            $table->integer('class_session_id')->unsigned()->index();
            $table->string('role')->nullable();
            $table->text('token')->nullable();
            $table->dateTime('start_time')->nullable();
            $table->dateTime('end_time')->nullable();
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
        Schema::dropIfExists('classes');
        Schema::dropIfExists('class_tutors');
        Schema::dropIfExists('class_students');
        Schema::dropIfExists('class_sessions');
        Schema::dropIfExists('class_session_histories');
    }
}
