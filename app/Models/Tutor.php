<?php

use App\Traits\SystemTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tutor extends Model
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
    public static $set_uuid = true;

    use SystemTrait, SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * Scope a query to only include active tutor.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    /**
     * Custom Column full_name
     * @return string
     */
    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    /**
     * To get associates User
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * To get associates class_tutors
     */
    public function class_tutors()
    {
        return $this->hasMany(ClassTutor::class, 'tutor_id', 'id');
    }
}
