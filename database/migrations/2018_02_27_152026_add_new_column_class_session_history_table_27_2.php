<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNewColumnClassSessionHistoryTable272 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('class_session_histories',function(Blueprint $table){
            $table->dateTime('stream_end_at')->nullable()->after('stream_created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('class_session_histories',function(Blueprint $table){
            $table->dropColumn('stream_end_at');
        });
    }
}
