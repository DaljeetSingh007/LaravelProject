<?php

namespace App\Traits;

use Ramsey\Uuid\Uuid;

/**
 * Trait SystemTrait
 *
 * We use this for Models where we want a UUID as uuid
 */
trait SystemTrait
{
    /**
     * to set default value in database when new record insert
     *
     * @return void
     */
    public static function bootSystemTrait()
    {
        static::creating(function ($model) {
            if (self::$set_uuid) {
                $model->uuid = Uuid::uuid1()->toString() . '-' . hexdec(uniqid());
            }

            if (self::$set_author && auth()->check()) {
                $model->author_id = auth()->user()->id;
            }
        });
    }
}
