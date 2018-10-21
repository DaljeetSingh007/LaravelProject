<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DeleteColumnFromClassSessionHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('class_session_histories',function(Blueprint $table){
            $table->dropColumn('stream_obj');
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
            $table->longText('stream_obj')->nullable()->after('stream_id');
        });
    }
}
