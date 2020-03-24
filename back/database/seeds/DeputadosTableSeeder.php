<?php

use Illuminate\Database\Seeder;
use App\Deputado;
use App\Email;
use App\Legislatura;
use App\Redesociai;
use App\Situacoe;
use App\Verba;

class DeputadosTableSeeder extends Seeder {
    /**
    * Run the database seeds.
    *
    * @return void
    */

    public function run() {
        $ch = curl_init();
        echo( 'Getting data' .  PHP_EOL );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch, CURLOPT_URL, 'http://dadosabertos.almg.gov.br/ws/deputados/em_exercicio?formato=json' );
        $exercicio = curl_exec( $ch );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch, CURLOPT_URL, 'https://dadosabertos.almg.gov.br/ws/deputados/que_exerceram_mandato?formato = json' );
        $exerceram = curl_exec( $ch );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch, CURLOPT_URL, 'https://dadosabertos.almg.gov.br/ws/deputados/que_renunciaram?formato = json' );
        $renunciaram = curl_exec( $ch );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch, CURLOPT_URL, 'https://dadosabertos.almg.gov.br/ws/deputados/que_perderam_mandato?formato = json' );
        $perderam = curl_exec( $ch );

        $exercicio = json_decode( $exercicio );
        $exerceram = json_decode( $exerceram );
        $renunciaram = json_decode( $renunciaram );
        $perderam = json_decode( $perderam );

        function getDepuptadoData( $id ) {
            $ch = curl_init();
            curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
            curl_setopt( $ch, CURLOPT_URL, "https://dadosabertos.almg.gov.br/ws/deputados/$id?formato=json" );
            $deputado = curl_exec( $ch );
            $deputado = json_decode( $deputado );
            if ( !empty( $deputado->deputado ) )
            return $deputado->deputado;
            else
            return [];
        }

        function getValues( $id ) {
            $ch = curl_init();
            foreach ( range( 2014, 2020 ) as $year ) {
                foreach ( range( 1, 12 ) as $month ) {

                    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
                    curl_setopt( $ch, CURLOPT_URL, "https://dadosabertos.almg.gov.br/ws/prestacao_contas/verbas_indenizatorias/deputados/$id/$year/$month?formato=json" );
                    $gastos = curl_exec( $ch );
                    $gastos = json_decode( $gastos );
                    if ( !empty( $gastos->list ) ) {
                        $verba = new Verba();
                        $verba->deputadoId = $id;
                        $verba->mes = $month;
                        $verba->ano = $year;
                        $verba->valor = 0;
                        foreach ( $gastos->list as $item ) {
                            $verba->valor += $item->valor;
                        }
                        $verba->save();
                    }

                }
            }
        }

        function storeOnDatabase( $data ) {
            if ( !empty( $data ) ) {
                echo( 'Storing Deputado ' . $data->id .  PHP_EOL );
                $deputado = new Deputado();
                $deputado->id = $data->id;
                $deputado->nome = $data->nome;
                $deputado->tagLocalizacao = $data->tagLocalizacao;
                if ( !empty( $deputado->cargoMesa ) )
                $deputado->cargoMesa = $data->cargoMesa;
                $deputado->situacao = $data->situacao;
                $deputado->tipoMandato = $data->tipoMandato;
                $deputado->nomeServidor = $data->nomeServidor;
                $deputado->sexo = $data->sexo;
                $deputado->naturalidadeMunicipio = $data->naturalidadeMunicipio;
                $deputado->naturalidadeUf = $data->naturalidadeUf;
                $deputado->dataNascimento = $data->dataNascimento;
                if ( !empty( $deputado->atividadeProfissional ) )
                $deputado->atividadeProfissional = $data->atividadeProfissional;
                $deputado->codigoSituacao = $data->codigoSituacao;
                $deputado->partidoEleicao = $data->partidoEleicao;
                $deputado->vidaProfissionalPolitica = $data->vidaProfissionalPolitica;
                $deputado->atuacaoParlamentar = $data->atuacaoParlamentar;
                if ( !empty( $deputado->condecoracao ) )
                $deputado->condecoracao = $data->condecoracao;
                $deputado->situacaoLegislaturas = $data->situacaoLegislaturas;
                $deputado->partidosLegislatura = $data->partidosLegislatura;
                $deputado->anoEleicaoLegislatura = $data->anoEleicaoLegislatura;
                $deputado->situacaoTerminoLegislatura = $data->situacaoTerminoLegislatura;
                $deputado->save();
                if ( !empty( $data->emails ) ) {
                    foreach ( $data->emails as $mail ) {
                        $email = new Email();
                        $email->tipo = $mail->tipo;
                        $email->endereco = $mail->endereco;
                        $email->deputadoId =  $data->id;
                        $email->save();
                    }
                }
                if ( !empty( $data->redesSociais ) ) {
                    foreach ( $data->redesSociais as $acoount ) {
                        $redesocial = new Redesociai();
                        $redesocial->nome = $acoount->redeSocial->nome;
                        $redesocial->baseUrl = $acoount->redeSocial->url;
                        $redesocial->url = $acoount->url;
                        $redesocial->deputadoId =  $data->id;
                        $redesocial->save();
                    }
                }
                if ( !empty( $data->legislaturas ) ) {
                    foreach ( $data->legislaturas as $legislatura ) {
                        $new = new Legislatura();
                        $new->numeroLegislatura = $legislatura->numeroLegislatura;
                        $new->tipoMandato = $legislatura->tipoMandato;
                        $new->deputadoId =  $data->id;
                        $new->save();
                        if ( !empty( $legislatura->situacoes ) ) {
                            foreach ( $legislatura->situacoes as $situacao ) {
                                $situacoe = new Situacoe();
                                $situacoe->status = $situacao->status;
                                if ( !empty( $situacao->motivo ) )
                                $situacoe->motivo = $situacao->motivo;
                                if ( !empty( $situacao->complemento ) )
                                $situacoe->complemento = $situacao->complemento;
                                $situacoe->legislaturaId =  $legislatura->numeroLegislatura;
                                $situacoe->save();
                            }
                        }
                    }
                }
                echo( 'Stored Deputado ' . $data->id .  PHP_EOL );
            }
        }

        function getId( $deputado ) {
            return $deputado->id;
        }

        $idList = [];
        if ( !empty( $exercicio->list ) )
        $idList +=  array_map( 'getId', $exercicio->list );
        if ( !empty( $exerceram->list ) )
        $idList +=  array_map( 'getId', $exerceram->list );
        if ( !empty( $renunciaram->list ) )
        $idList +=  array_map( 'getId', $renunciaram->list );
        if ( !empty( $perderam->list ) )
        $idList +=  array_map( 'getId', $perderam->list );
        echo( 'Getting Deputado Data ' .  PHP_EOL );
        $deputadoList =  array_map( 'getDepuptadoData', $idList );
        echo( 'Storing Deputado Data' .  PHP_EOL );
        array_map( 'storeOnDatabase', $deputadoList );
        array_map( 'getValues', $idList );

    }
}
