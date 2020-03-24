<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeputadosTable extends Migration {
    /**
    * Run the migrations.
    *
    * @return void
    */

    public function up() {
        Schema::create( 'deputados', function ( Blueprint $table ) {
            $table->increments('id');
            $table->string( 'nome' );
            $table->integer( 'tagLocalizacao' );
            $table->string( 'cargoMesa' )->nullable();
            $table->date( 'dataCargoMesa' )->nullable();
            $table->string( 'situacao' );
            $table->date( 'inicioSituacao' )->nullable();
            $table->string( 'tipoMandato' );
            $table->string( 'nomeServidor' );
            $table->string( 'sexo' );
            $table->string( 'naturalidadeMunicipio' );
            $table->string( 'naturalidadeUf' );
            $table->string( 'dataNascimento' );
            $table->string( 'atividadeProfissional' )->nullable();
            $table->integer( 'codigoSituacao' );
            $table->string( 'partidoEleicao' );
            $table->string( 'vidaProfissionalPolitica', 4500 );
            $table->string( 'atuacaoParlamentar' ,2500 );
            $table->string( 'condecoracao' , 1500 )->nullable();
            $table->string( 'situacaoLegislaturas', 2000 );
            $table->string( 'partidosLegislatura' );
            $table->string( 'anoEleicaoLegislatura' );
            $table->string( 'situacaoTerminoLegislatura',2500 );
            $table->timestamps();
        });


    }

    /**
    * Reverse the migrations.
    *
    * @return void
    */

    public function down() {
        Schema::dropIfExists( 'deputados' );
    }
}
