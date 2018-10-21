<?php

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Traits\SystemTrait;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
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

    use Notifiable, SystemTrait, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'is_master',
    ];

    /*******
     * Mutatores start
     */
    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = Hash::make($password);
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
     * To get associates Tutor
     */
    public function tutor()
    {
        return $this->belongsTo(Tutor::class, 'id', 'user_id');
    }

    /**
     * To get associates Student
     */
    public function student()
    {
        return $this->belongsTo(Student::class, 'id', 'user_id');
    }
}
