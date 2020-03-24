<?php

use App\Http\Controllers\RedesSociaisController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerbasController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['middleware' => ['api', 'activity']], function () {
    // User
    Route::post('/register', 'UserController@store');
    Route::get('/redesociais/ranking', 'RedesSociaisController@getRanking');
    //Redes Sociais
    Route::get('/redesociais/ranking/deputados', 'RedesSociaisController@getDeputadosRanking');
    Route::get('/gastos/{ano}/{mes}', function($mes,$ano){return(VerbasController::getGastosMes($mes,$ano));});
    Route::get('/gastos/{ano}/', function($mes,$ano){ return(VerbasController::getGastosAno($ano));});
    //Verbas
    Route::get('/gastos/{deputado}/{ano}/{mes}', function( $deputado, $ano){return(VerbasController::getGastosAnoDeputado($deputado,$ano));});
    Route::get('/gastos/{deputado}/{ano}', function( $deputado, $mes, $ano){ return(VerbasController::getGastosMes($deputado,$mes,$ano));});
});
