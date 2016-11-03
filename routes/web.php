<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



  Route::get('/', function () {
      return view('welcome');
  });

    Route::get('home', 'HomeController@index')->middleware('home');

    Route::group(['middleware' => 'guest'], function () {

      Route::post('login', 'Auth\LoginController@doLogin');

      Route::get('login', 'Auth\LoginController@showLoginForm');

      Route::get('register', 'Auth\RegisterController@show');

      Route::post('register', 'Auth\RegisterController@register');

    });

    Route::get('logout', 'Auth\LoginController@doLogout')->middleware('auth');

