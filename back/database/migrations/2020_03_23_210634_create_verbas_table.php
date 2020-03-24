<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVerbasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('verbas', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("deputadoId")->unsigned();
            $table->foreign("deputadoId")->references("id")->on("deputados");
            $table->float("valor");
            $table->integer("mes");
            $table->integer("ano");
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
        Schema::dropIfExists('verbas');
    }
}
