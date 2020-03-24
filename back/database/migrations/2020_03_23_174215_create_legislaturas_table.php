<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLegislaturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'legislaturas', function ( Blueprint $table ) {
            $table->increments( 'id' );
            $table->integer( 'numeroLegislatura' );
            $table->integer("deputadoId")->unsigned();
            $table->foreign( 'deputadoId' )->references( 'id' )->on( 'deputados' );
            $table->date( 'inicioLegislatura' )->nullable();
            $table->date( 'terminoLegislatura' )->nullable();
            $table->string( 'tipoMandato' );
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
        Schema::dropIfExists('legislaturas');
    }
}
