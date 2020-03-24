<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCandidaturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'candidaturas', function ( Blueprint $table ) {
            $table->increments('id');
            $table->integer( 'numeroCandidato' );
            $table->timestamps();
            $table->integer("legislatura");
            $table->integer("deputadoId")->unsigned();
            $table->foreign( 'deputadoId' )->references( 'id' )->on( 'deputados' );
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('candidaturas');
    }
}
