<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticable as AuthenticableTrait;

class User extends Model implements Authenticatable
{
    protected $fillable = ['username', 'email', 'password'];

    public function getAuthIdentifierName()
    {

    }

    public function getAuthIdentifier()
    {

    }

    public function getAuthPassword()
    {

    }

    public function getRememberToken()
    {
        return $this->remember_token;
    }

    public function setRememberToken($value)
    {
        $this->remember_token = $value;
    }

    public function getRememberTokenName()
    {
        return 'remember_token';
    }
}
