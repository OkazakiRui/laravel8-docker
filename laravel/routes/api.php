<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;

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

Route::post('/login', [UserController::class, "login"]);
Route::middleware(['auth:sanctum'])->group(function () {
  Route::apiResource("todos", TodoController::class)->only([
    "index", "store", "show", "update", "destroy"
  ]);
    Route::apiResource("users", UserController::class)->only([
    "index", "update", "destroy"
    ]);
});
Route::apiResource("/users", UserController::class)->only([
  "store"
]);

