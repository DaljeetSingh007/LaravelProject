<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTutorTroveLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tutor_trove_logs', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->integer('author_id')->unsigned()->index();
            $table->integer('class_id')->unsigned()->index();
            $table->tinyInteger('user_type')->default(0); 
            $table->string('stream_id')->nullable();
            $table->string('whiteboard_hash')->nullable(); 
            $table->string('whiteboard_title')->nullable(); 
            $table->string('user_name')->nullable(); 
            $table->text('response_url')->nullable(); 
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
        Schema::drop('tutor_trove_logs');
    }
}
