<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Redesociai extends Model {

    public function deputado() {
        return $this->belongsTo( 'App\Deputado', 'deputadoId', 'id' );
    }
}
