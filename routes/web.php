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

Route::get('register-form', function () {
    return view('register');
});

Route::post('register', function () {
    return response()->json(['message' => 'We gucci boys']);
})->name('register');

Route::get('news', function () {
    return view('news');
});

Route::get('users', function () {
    return view('users');
});
