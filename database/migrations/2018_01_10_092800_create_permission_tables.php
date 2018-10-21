<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePermissionTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $tableNames = config('permission.table_names');

        Schema::create($tableNames['permissions'], function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->string('display_name')->collate('utf8_unicode_ci');
            $table->string('name')->collate('utf8_unicode_ci');
            $table->string('guard_name')->collate('utf8_unicode_ci');
            $table->timestamps();
            $table->engine = 'InnoDB';
        });

        Schema::create($tableNames['roles'], function (Blueprint $table) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->increments('id')->unsigned()->index();
            $table->tinyInteger('is_public')->default(1);
            $table->string('display_name')->nullable()->collate('utf8_unicode_ci');
            $table->string('name')->collate('utf8_unicode_ci');
            $table->string('guard_name')->collate('utf8_unicode_ci');
            $table->string('uuid', 100)->collate('utf8_unicode_ci')->nullable()->index();
            $table->timestamps();
            $table->engine = 'InnoDB';
        });

        Schema::create($tableNames['model_has_permissions'], function (Blueprint $table) use ($tableNames) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->integer('permission_id')->unsigned()->index();
            $table->morphs('model');

            $table->foreign('permission_id')
                ->references('id')
                ->on($tableNames['permissions'])
                ->onDelete('cascade');

            $table->primary(['permission_id', 'model_id', 'model_type']);
        });

        Schema::create($tableNames['model_has_roles'], function (Blueprint $table) use ($tableNames) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->integer('role_id')->unsigned()->index();
            $table->morphs('model');

            $table->foreign('role_id')
                ->references('id')
                ->on($tableNames['roles'])
                ->onDelete('cascade');

            $table->primary(['role_id', 'model_id', 'model_type']);
        });

        Schema::create($tableNames['role_has_permissions'], function (Blueprint $table) use ($tableNames) {
            $table->collation = 'utf8_unicode_ci';
            $table->charset = 'utf8';
            $table->integer('permission_id')->unsigned()->index();
            $table->integer('role_id')->unsigned()->index();

            $table->foreign('permission_id')
                ->references('id')
                ->on($tableNames['permissions'])
                ->onDelete('cascade');

            $table->foreign('role_id')
                ->references('id')
                ->on($tableNames['roles'])
                ->onDelete('cascade');

            $table->primary(['permission_id', 'role_id']);
            app('cache')->forget('spatie.permission.cache');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        $tableNames = config('permission.table_names');

        Schema::drop($tableNames['role_has_permissions']);
        Schema::drop($tableNames['model_has_roles']);
        Schema::drop($tableNames['model_has_permissions']);
        Schema::drop($tableNames['roles']);
        Schema::drop($tableNames['permissions']);
    }
}
