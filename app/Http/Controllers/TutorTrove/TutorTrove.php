<?php

/*
 *  Class declaration for connecting to Tutor Trove API v1
 *	Eli Luberoff, January 2011
 *
 *  see documentation at:
 *  https://api.tutortrove.com/v1/
 */
namespace App\Http\Controllers\TutorTrove;

use Exception;
require_once dirname(__FILE__) . "/oauth.php";


class TutorTrove {

	public static $api_base_url;
	
	public static $use_https = true;

	public static $public_key;
	
	public static $private_key;

	public static $api_endpoint;
	
	protected static $consumer;
	
	protected static $sig_method;
	
	protected static $req;	

	
	protected static function _encode_params($params = array()) {
		return base64_encode(json_encode($params));
	}
	
	protected static function _form_api_endpoint($object = null, $method = null) {
		if (!self::$api_base_url) {
			self::$api_base_url = "http" . (self::$use_https ? "s" : "") . "://api.tutortrove.com/v1/";		
		}

		self::$api_endpoint = self::$api_base_url . "$object/$method";

	}
	
	protected static function _form_request($object, $method = null, $parameters = array()) {
		if (self::$use_https) {
			$parameters['secure'] = 1;
		} else {
			$parameters['secure'] = 0;		
		}
	
		self::_form_api_endpoint($object, $method);

		self::$consumer = new \OAuthConsumer(self::$public_key, self::$private_key);
		self::$req = \OAuthRequest::from_consumer_and_token(self::$consumer, null, "GET", self::$api_endpoint, $parameters);
		self::$sig_method = new \OAuthSignatureMethod_HMAC_SHA1();
		self::$req->sign_request(self::$sig_method, self::$consumer, null);//note: double entry of token

	}
	
	/*
	*
	* just makes a test call to make sure that the public/private key check out
	*
	*/
	public static function test() {
		self::_form_request("test", null);
		return self::$req->to_url();
	}
	
}