<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFiliacoesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'filiacoes', function ( Blueprint $table ) {
            $table->increments('id');
            $table->integer("deputadoId")->unsigned();
            $table->foreign( 'deputadoId' )->references( 'id' )->on( 'deputados' );
            $table->string( 'dataInicio' )->nullable();
            $table->string( 'dataTermino' )->nullable();
            $table->integer("partidoId")->unsigned();
            $table->foreign( 'partidoId' )->references( 'id' )->on( 'partidos' );
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
        Schema::dropIfExists('filiacoes');
    }
}
