<?php

use App\Traits\SystemTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;

class GClass extends Model
{
    use SystemTrait, SoftDeletes;

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

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at', 'start_time', 'end_time'];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'classes';

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($query) {
            $query->tutors()->delete();

            $query->students()->delete();
        });
    }

    /**
     * Get the class start_time
     *
     * @param  string  $value
     * @return string
     */
    public function getStartTimeAttribute($value)
    {
        try {
            return Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('glorious.date_format.class_start_time'));
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Get the class end_time
     *
     * @param  string  $value
     * @return string
     */
    public function getEndTimeAttribute($value)
    {
        try {
            return Carbon::createFromFormat('Y-m-d H:i:s', $value)->format(config('glorious.date_format.class_start_time'));
        } catch (Exception $e) {
            return null;
        }
    }

    /**
     * Set the class start_time
     *
     * @param  string  $value
     * @return void
     */
    public function setStartTimeAttribute($value)
    {
        try {
            $this->attributes['start_time'] = Carbon::createFromFormat('d.m.Y H:i', $value);
        } catch (Exception $e) {
            $this->attributes['start_time'] = null;
        }
    }

    /**
     * Set the class end_time
     *
     * @param  string  $value
     * @return void
     */
    public function setEndTimeAttribute($value)
    {
        try {
            $this->attributes['end_time'] = Carbon::createFromFormat('d.m.Y H:i', $value);
        } catch (Exception $e) {
            $this->attributes['end_time'] = null;
        }
    }

    /**
     * To get associates Tutor
     */
    public function tutors()
    {
        return $this->hasMany(ClassTutor::class, 'class_id')
            ->with(['tutor' => function ($query) {
                $query->select(['first_name', 'last_name', 'id']);
            }])
            ->select(['id', 'class_id', 'tutor_id']);
    }

    /**
     * To get associates Students
     */
    public function students()
    {
        return $this->hasMany(ClassStudent::class, 'class_id')
            ->with(['student' => function ($query) {
                $query->select(['first_name', 'last_name', 'id']);
            }])
            ->select(['id', 'class_id', 'student_id']);
    }

    /**
     * To get associates last class session
     */
    public function class_session()
    {
        return $this->hasOne(ClassSession::class, 'class_id', 'id')->orderBy('id', 'DESC');
    }

    /**
     * To get associates last class status histories
     */
    public function class_status_histories()
    {
        return $this->hasMany(ClassStatusHistory::class, 'class_id')->orderBy('id', 'DESC');
    }
}
