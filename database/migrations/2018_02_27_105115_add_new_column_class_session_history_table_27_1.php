<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNewColumnClassSessionHistoryTable271 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('class_session_histories',function(Blueprint $table){
            $table->text('stream_id')->nullable()->after('token');
            $table->dateTime('stream_created_at')->nullable()->after('end_time');
            $table->longText('stream_obj')->nullable()->after('stream_id');
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
            $table->dropColumn('stream_obj');
            $table->dropColumn('stream_id');
            $table->dropColumn('stream_created_at');
        });
    }
}
