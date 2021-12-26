<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Developer extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['first_name', 'last_name', 'email', 'gender', ];
    protected $hidden = ['deleted_at','image_path'];
    protected $appends = ['full_name',"image_url"];


    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }


    public function getImageUrlAttribute()
    {

        $store_path = $this->image_path;
        $url = url(Storage::url($this->image_path));
        return "{$url}";
    }
}
