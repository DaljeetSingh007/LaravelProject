<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Symfony\Component\HttpFoundation\Request;
use Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        
        $locale = request()->segment(1);
        if (isset(config('glorious.available_locales')[$locale])) {
            app()->setLocale($locale);
            Carbon::setLocale($locale);
        } else {
            app()->setLocale('en');
        }

        Validator::extend('eliminate_script', function ($attribute, $value, $parameters, $validator) {
            if ($value != strip_tags($value)) {
                return false;
            }
            return true;
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
