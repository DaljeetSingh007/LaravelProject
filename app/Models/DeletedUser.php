<?php

use Illuminate\Database\Eloquent\Model;
use App\Traits\SystemTrait;

class DeletedUser extends Model
{
    /**
     * to set default author_id in database
     *
     * @var bool
     */
    public static $set_author = false;

    /**
     * to set default uuid in database
     *
     * @var bool
     */
    public static $set_uuid = true;

    use SystemTrait;
}
