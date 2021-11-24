<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Todo extends Model
{
    use HasFactory;
    use SoftDeletes;

    // ホワイトリスト
    // $fillableに指定したカラムのみ
    // ブラックリスト
    // $guarded
    protected $fillable = [
        'title', 'text', 'user_id'
    ];
    // todo所有userの取得
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}