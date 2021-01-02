<?php

/** @var \Laravel\Lumen\Routing\Router $router */

use App\Http\Middleware\CorsMiddleware;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'users'], function () use ($router) {

    $router->get('/', 'UserController@index' );

});

// Card routes

$router->group(['prefix' => 'cards'], function () use ($router) {

    $router->get('/', 'CardController@index' );
    $router->get('/{card}', 'CardController@show' );

    $router->post('/', 'CardController@store' );

    $router->put('/{card}', 'CardController@update' );
    $router->delete('/{card}', 'CardController@destroy' );

});

$router->group(['prefix' => 'card-lists'], function () use ($router) {

    $router->get('/', 'CardListController@index' );
    $router->get('/{cardList}', 'CardListController@show' );

    $router->post('/', 'CardListController@store' );
    
    $router->put('/{cardList}', 'CardListController@update' );
    $router->delete('/{cardList}', 'CardListController@destroy' );

});