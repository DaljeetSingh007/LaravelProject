<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableClassStatusHistory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * Every Class Have multiple status like default when class generate with pending status.
         * Then Tutor start session it will change with inprogress status
         * Then completed status
         * So in this table we will store all status history
         */
        Schema::create('class_status_histories', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->integer('class_id')->unsigned()->index();
            $table->integer('author_id')->unsigned()->index();
            $table->tinyInteger('status')->default(0);
            $table->timestamp('created_at')->nullable();
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
        Schema::dropIfExists('class_status_histories');
    }
}
