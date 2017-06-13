<?php

namespace API;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Appointment extends Model
{
  use SoftDeletes;

  protected $table = 'appointments';
	protected $fillable = ['date','startTime', 'email', 'idtime'];

	protected $dates = ['deleted_at'];
}
