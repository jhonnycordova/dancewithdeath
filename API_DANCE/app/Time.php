<?php

namespace API;

use Illuminate\Database\Eloquent\Model;


class Time extends Model
{

  protected $table = 'times';
	protected $fillable = ['time'];

}
