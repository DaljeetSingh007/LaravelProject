<?php

use App\Traits\SystemTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClassSession extends Model
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

    use SystemTrait, SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];
}
