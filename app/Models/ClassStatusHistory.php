<?php

use App\Traits\SystemTrait;
use Illuminate\Database\Eloquent\Model;

class ClassStatusHistory extends Model
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
    
    /**
     * to set default timestamps
     *
     * @var bool
     */
    public $timestamps = false;

    use SystemTrait;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at'];
}
