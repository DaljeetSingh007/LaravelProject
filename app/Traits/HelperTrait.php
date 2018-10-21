<?php

namespace App\Traits;

/**
 * Trait HelperTrait
 * Used to get some default helper functions
 */
trait HelperTrait
{
    /**
     * Used to Share Resource  
     * 
     * @param arary $keys 
     * @return void
     */
    public function shareResource(array $keys) {
        foreach ($keys as $key => $value) {
            view()->share($key, $value);
        }
    }
}