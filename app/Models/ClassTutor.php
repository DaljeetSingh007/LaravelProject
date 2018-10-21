<?php

use App\Traits\SystemTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClassTutor extends Model
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
    public static $set_uuid = false;

    use SystemTrait, SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * To get associates tutor
     */
    public function tutor()
    {
        return $this->hasOne(Tutor::class, 'id', 'tutor_id');
    }
}
