<?php

use App\Traits\SystemTrait;
use Illuminate\Database\Eloquent\Model;

class TutorTroveLog extends Model
{
    /**
     * to set default author_id in database
     *
     * @var bool
     */
    public static $set_author = true;

    /**
     * to set default uuid in database
     *
     * @var bool
     */
    public static $set_uuid = false;

    use SystemTrait;
}
