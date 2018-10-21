<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUploadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uploads', function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->index();
            $table->integer('author_id')->index();
            $table->integer('object_id')->index();
            $table->string('object_type')->collate('utf8_unicode_ci')->index();
            $table->string('name')->collate('utf8_unicode_ci')->nullable();
            $table->string('filename')->collate('utf8_unicode_ci')->nullable();
            $table->string('header')->collate('utf8_unicode_ci')->nullable();
            $table->string('size')->collate('utf8_unicode_ci')->nullable();
            $table->string('uuid', 100)->collate('utf8_unicode_ci')->nullable()->index();
            $table->timestamps();
            $table->softDeletes();
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
        Schema::dropIfExists('uploads');
    }
}
