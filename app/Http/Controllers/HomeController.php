<?php

namespace App\Http\Controllers;

use App\Traits\HelperTrait;
use OpenTok\OpenTok;
use OpenTok\ArchiveMode;
use OpenTok\MediaMode;
use OpenTok\Role;

class HomeController extends GloriousAdminController
{
    use HelperTrait;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        parent::__construct();
        $this->shareResource([
            'title' => trans('dashboard.module_title')
        ]);
    }

    /**
     * Show the application Welcome Screen.
     *
     * @return \Illuminate\Http\Response
     */
    public function welcome()
    {
        return view('modules.home.dashboard');
    }

    public function serverStream()
    {
        $objOpenTalk = new OpenTok(env('TALKBOX_KEY'),env('TALKBOX_SECRET'));

        $sessionOptions = array(
            'archiveMode' => ArchiveMode::ALWAYS,
            'mediaMode' => MediaMode::ROUTED
        );

        // 2_MX40NjA2MDc3Mn5-MTUxODc3MDI5ODI4MH4rWDJSL0VpaEZpUXYwNUxFZ0xsSzNGMk5-QX4
        // $session = $objOpenTalk->createSession($sessionOptions);
        $tokenOptions = [
            'role' => Role::MODERATOR,
            'data' => 'name=Master'
        ];
        $token = $objOpenTalk->generateToken('2_MX40NjA2MDc3Mn5-MTUxODc3MDI5ODI4MH4rWDJSL0VpaEZpUXYwNUxFZ0xsSzNGMk5-QX4',$tokenOptions);
        
        view()->share('api_key', env('TALKBOX_KEY'));
        view()->share('token', $token);
        view()->share('session_id', '2_MX40NjA2MDc3Mn5-MTUxODc3MDI5ODI4MH4rWDJSL0VpaEZpUXYwNUxFZ0xsSzNGMk5-QX4');
        return view('modules.home.server');
    }

    public function clientStream()
    {
        $objOpenTalk = new OpenTok(env('TALKBOX_KEY'),env('TALKBOX_SECRET'));
        
        // 2_MX40NjA2MDc3Mn5-MTUxODc3MDI5ODI4MH4rWDJSL0VpaEZpUXYwNUxFZ0xsSzNGMk5-QX4
        $tokenOptions = [
            'role' => Role::SUBSCRIBER,
            'data' => 'name=Master'
        ];
        $token = $objOpenTalk->generateToken('2_MX40NjA2MDc3Mn5-MTUxODc3MDI5ODI4MH4rWDJSL0VpaEZpUXYwNUxFZ0xsSzNGMk5-QX4',$tokenOptions);
        
        view()->share('api_key', env('TALKBOX_KEY'));
        view()->share('token', $token);
        view()->share('session_id', '2_MX40NjA2MDc3Mn5-MTUxODc3MDI5ODI4MH4rWDJSL0VpaEZpUXYwNUxFZ0xsSzNGMk5-QX4');
        return view('modules.home.client');
    }


}
