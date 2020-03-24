<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnderecosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'enderecos', function ( Blueprint $table ) {
            $table->increments('id');
            $table->integer("deputadoId")->unsigned();
            $table->foreign( 'deputadoId' )->references( 'id' )->on( 'deputados' );
            $table->string( 'logradouro' );
            $table->string( 'numero' );
            $table->string( 'complemento' );
            $table->string( 'bairro' );
            $table->string( 'cep' );
            $table->string( 'descTipo' );
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('enderecos');
    }
}
