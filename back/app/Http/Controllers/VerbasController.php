<?php

namespace App\Http\Controllers;

use App\Deputado;
use App\Verba;
use Illuminate\Http\Request;

class VerbasController extends Controller {
    public static function getGastosMes( $mes, $ano ) {
        $gastos = Verba::select( 'deputadoId', 'valor' )->where( 'mes', $mes )->where( 'ano', $ano )->get();
        $gastos = $gastos->map(function($gasto){
            $deputado = Deputado::select( 'nome', 'partidoEleicao' )->find($gasto->deputadoId);
            return[ "nome" => $deputado->nome, "partido" => $deputado->partidoEleicao , "valor" =>  $gasto->valor];
        });
        $gastos = $gastos->sortByDesc("valor");
        return json_encode( $gastos );
    }

    public static function getGastosAno( $ano ) {
        $gastos = Verba::select( 'deputadoId', 'valor' )->where( 'ano', $ano )->get();
        $gastos = $gastos->groupBy("deputadoId")->transform(function($item,$key){
            $deputado = Deputado::select( 'nome', 'partidoEleicao' )->find($key);
            $valor = array_sum($item->pluck("valor")->toArray());
            return [ "deputado" => $deputado, "valor" => $valor ];
        });

        return json_encode( $gastos->sortByDesc("valor") );

    }

    public static function getGastosMesDeputado( $id, $mes, $ano ) {
        $gastos = Verba::select( 'deputadoId', 'valor' )->where("id", $id)->where( 'mes', $mes )->where( 'ano', $ano )->get();
        $gastos = $gastos->map(function($gasto){
            $deputado = Deputado::select( 'nome', 'partidoEleicao' )->find($gasto->deputadoId);
            return[ "nome" => $deputado->nome, "partido" => $deputado->partidoEleicao , "valor" =>  $gasto->valor];
        });
        return json_encode( $gastos );
    }

    public static function getGastosAnoDeputado( $id, $ano ) {
        $gastos = Verba::select( 'deputadoId', 'valor' )->where("id", $id)->where( 'ano', $ano )->get();
        $gastos = $gastos->groupBy("deputadoId")->transform(function($item,$key){
            $deputado = Deputado::select( 'nome', 'partidoEleicao' )->find($key);
            $valor = array_sum($item->pluck("valor")->toArray());
            return [ "deputado" => $deputado, "valor" => $valor ];
        });

        return json_encode( $gastos->sortByDesc("valor") );
    }
}
