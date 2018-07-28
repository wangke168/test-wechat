<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WechatVoice extends Model
{
    protected $table = 'wx_voice_request';

    public function scopeFocusPublished($query, $eventkey)
    {
        $query->whereRaw('FIND_IN_SET("' . $eventkey . '", eventkey)')
            ->where('online', '1')
            ->where('focus', '1')
            ->whereDate('start_date', '<=', date('Y-m-d'))
            ->whereDate('end_date', '>=', date('Y-m-d'));
    }

    public function scopeUsagePublished($query, $eventkey)
    {
        $query->where(function ($query) use ($eventkey) {
            $query->whereRaw('FIND_IN_SET("' . $eventkey . '", eventkey)')
                ->orWhereRaw('FIND_IN_SET("all", eventkey)');
        })
            ->where('online', '1')
            ->whereDate('start_date', '<=', date('Y-m-d'))
            ->whereDate('end_date', '>=', date('Y-m-d'));
    }

}
