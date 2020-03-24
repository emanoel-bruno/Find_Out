<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRedesociaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create( 'redesociais', function ( Blueprint $table ) {
            $table->increments('id');
            $table->integer("deputadoId")->unsigned();
            $table->foreign( 'deputadoId' )->references( 'id' )->on( 'deputados' );
            $table->string( 'nome' );
            $table->string( 'baseUrl' );
            $table->string( 'url' );
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
        Schema::dropIfExists('redesociais');
    }
}
