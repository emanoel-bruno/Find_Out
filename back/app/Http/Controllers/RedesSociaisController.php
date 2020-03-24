<?php

namespace App\Http\Controllers;

use App\Deputado;
use App\Redesociai;
use Illuminate\Http\Request;

class RedesSociaisController extends Controller {

    //return the most used Social Network
    public static  function getRanking() {
        $redesSociais = Redesociai::all()->countBy( 'nome' )->sortDesc();
        return json_encode( $redesSociais );
    }

    public static  function getDeputadosRanking() {
        $deputados = Redesociai::all()->countBy( 'deputadoId' )->sortDesc();
        $deputados = $deputados->transform(function ($item, $key) {
            $deputado = Deputado::select( 'nome', 'partidoEleicao' )->find($key);
            return[ "nome" => $deputado->nome, "partido" => $deputado->partidoEleicao , "count" =>  $item];
        });
        return json_encode( $deputados );
    }
}
