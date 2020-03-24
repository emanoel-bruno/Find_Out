<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Verba extends Model {

    public function deputado() {
        return $this->belongsTo( 'App\Deputado', 'deputadoId', 'id' );
    }
}
