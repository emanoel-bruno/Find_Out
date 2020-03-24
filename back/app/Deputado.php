<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Deputado extends Model {
    use Notifiable;

    protected $fillable = [
        'id', 'nome', 'nomeServidor', 'partido', 'endereco', 'telefone', 'fax', 'email', 'atividadeProfissional', 'naturalidadeMunicipio', 'naturalidadeUf', 'dataNascimento'
    ];

    public function redesociai() {
        return $this->hasMany( 'App\Redesociai', 'deputadoId', 'id' );
    }

    public function verba() {
        return $this->hasMany( 'App\Verba', 'deputadoId', 'id' );
    }
}
