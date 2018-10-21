<?php

namespace App\Http\Controllers;

use OpenTok\OpenTok;
use OpenTok\ArchiveMode;
use OpenTok\MediaMode;
use OpenTok\Role;
use OpenTok\Exception\UnexpectedValueException;
use Exception;

class OpenTokController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * To create session
     *
     * @return mixed
     */
    public function createSession()
    {
        try {
            $objOpenTalk = new OpenTok(env('TALKBOX_KEY'), env('TALKBOX_SECRET'));

            $sessionOptions = [
                'archiveMode' => ArchiveMode::ALWAYS,
                'mediaMode'   => MediaMode::ROUTED,
            ];
            $session = $objOpenTalk->createSession($sessionOptions);

            return $session->getSessionId();
        } catch (UnexpectedValueException $e) {
        }

        throw new Exception('Failed to create a session');
    }

    /**
     * To generate token
     *
     * @param string $username
     * @param string $userUuid
     * @param string $classUuid
     * @param string $tutorUuid
     * @param \OpenTok\Role $userRole
     * @param \OpenTok\Session $sessionId
     * @return mixed
     */
    public function generateToken($username, $userUuid, $classUuid, $tutorUuid, $userRole, $sessionId, $is_master)
    {
        try {
            $objOpenTalk = new OpenTok(env('TALKBOX_KEY'), env('TALKBOX_SECRET'));
            
            $tokenOptions = [
                'role' => $userRole,
                'data' => "mod={$is_master}&name={$username}&userUuid={$userUuid}&classUuid={$classUuid}&tutorUuid={$tutorUuid}",
            ];

            $token = $objOpenTalk->generateToken($sessionId, $tokenOptions);

            return $token;
        } catch (Exception $e) {
        }
        throw new Exception('Failed to generate a token');
    }
}
