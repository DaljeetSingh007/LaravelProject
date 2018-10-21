<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/test',function(){
//     $objOpenTalk = new \OpenTok\OpenTok(env('TALKBOX_KEY'), env('TALKBOX_SECRET'));
//     echo '<pre>';print_r($objOpenTalk->listArchives());exit;
// });

Route::get('/language/{locale}', '\App\Http\Helpers@setLocale')->name('switch_language');
Route::get('/', function () { return redirect()->route('login'); });
Route::get('/home', function () { return redirect()->route('dashboard'); });

Route::group(['prefix' => app()->getLocale()], function () {
    Route::auth();
    Route::get('/', 'HomeController@welcome')->name('dashboard');
    Route::match(['get','post'],'logout', 'Auth\LoginController@logout')->name('logout');
    Route::resource('users','UserController');
    Route::resource('roles','RoleController');
    Route::resource('tutors','TutorController');

    Route::group(['prefix' => 'students'], function () {
        Route::get('my-class', 'StudentClassController@assignedClasses')->name('students.myclass');
        Route::get('join-class/{uuid}', 'StudentClassController@joinClass')->name('students.join_class');
        Route::group(['prefix' => 'class'], function () {
            Route::post('stream/update/{token}', 'StudentClassController@updateStreamId')->name('students.class.update_stream_id');
            Route::get('moderator/{token}', 'StudentClassController@getModerator')->name('students.class.moderator');
            Route::get('stream/endtime', 'StudentClassController@setStreamEndTime')->name('students.class.endtime');
            Route::post('tutor-trove', 'StudentClassController@logTutorTrove')->name('tutors.log_tutor_trove');
        });
    });

    Route::group(['prefix' => 'tutor'], function () {
        Route::get('my-class', 'TutorClassController@assignedClasses')->name('tutors.myclass');
        Route::get('start-class/{uuid}', 'TutorClassController@startClass')->name('tutors.start_class');
        Route::group(['prefix' => 'class'], function () {
            Route::post('stream/update/{token}', 'TutorClassController@updateStreamId')->name('tutors.class.update_stream_id');
        });
    });

    Route::resource('students','StudentController');
    Route::resource('classes','ClassController');
    Route::get('/client', 'HomeController@clientStream');
    Route::get('/server', 'HomeController@serverStream');
});

// Route::get('/userfake', function () { 
//     $faker = Faker\Factory::create();
//     for($i = 0; $i < 800; $i++) {
//         \User::create([
//             'first_name' => 'copy',
//             'last_name' => $i+50,
//             'email' => $faker->email,
//             'password' => bcrypt('password')
//         ]);
//     }
//  });