<?php

namespace App\Http\Controllers\TutorTrove;

use App\Http\Controllers\TutorTrove\TutorTrove;

/*
 *  Class declaration for connecting to Tutor Trove API
 *  Copyright 2010, Tutor Trove, LLC 
 */
 
class TutorTrove_SSO extends TutorTrove
{

	function TutorTrove_SSO()
	{
		
	}
	
	/*
	* 	@param data 	array of data about the session
	*	  (string) id [required] unique hash for the session
	*	  (string) title		[optional]
	*	  (int) 	start		[optional] unix timestamp
	*	  (int) duration		[optional] in seconds
	*	  (array) user	array of data about user containing:
	*		(string) id	[required] unique id for user
	*		(string) type	[optional] "student", "tutor" or "admin", defaults to student
	*		(string) name	[optional] defaults to "guest"
	*		(string) skype		[optional] skype username
	*/

	public static function whiteboard($data) {
		self::_form_request("SSO", "whiteboard", $data);
		return self::$req->to_url();
	}
		
}