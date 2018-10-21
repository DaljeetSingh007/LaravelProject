<?php

namespace App\Http\Controllers;
use User;

class GloriousAdminController extends Controller
{
    /**
     * Used to get login user id
     */
    protected $auth_user_id;

    /**
     * Used to decide user is logged in
     */
    protected $auth_user;

    /**
     * to get info of current Logged in user
     */
    protected $auth_user_data;

    /**
     * Theme Layout file name
     */
    protected $layout;

    /**
     * Theme partials folder name
     */
    protected $partials;

    /**
     * Per page records
     */
    protected $per_page;

    /**
     * To execute when controller execute
     */
    public function __construct()
    {
        if (auth()->check()) {
            $this->auth_user       = 1;
            $this->auth_user_id    = session()->get('auth_user_id');
            $this->layout          = 'layouts.metronic';
            $this->partials        = 'layouts.partials.metronic';
            $this->per_page        = 10;
            $this->auth_user_data  = User::with(['student', 'tutor'])->find($this->auth_user_id);
            view()->share('auth_user', $this->auth_user);
            view()->share('auth_user_id', $this->auth_user_id);
            view()->share('auth_user_data', auth()->user());
        }
    }
}
