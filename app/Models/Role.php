<?php

use App\Traits\SystemTrait;
use Spatie\Permission\Models\Role as SpatieRole;

class Role extends SpatieRole
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

    use SystemTrait;

    /**
     * Scope a query to only include popular users.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublic($query)
    {
        return $query->where('is_public', 1);
    }
}
