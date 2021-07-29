<?php



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AnalyticsController;

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

Route::get('/Region' , [AnalyticsController::class, 'getRegion1']);
Route::get('/Region/{id}' , [AnalyticsController::class, 'getRegion2']);


Route::get('/Entrie' , [AnalyticsController::class, 'getEntrie1']);
Route::get('/Entrie/{date}' , [AnalyticsController::class, 'getEntrie2']);
Route::get('/Entrie/{country_id}/{date}' , [AnalyticsController::class, 'getEntrie3']);
Route::get('/Entrie/porpais/{countriesAndTerritories}' , [AnalyticsController::class, 'getEntrie4']);





Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
