<?php



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AnalyticsController;
use App\Models\Region;
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

Route::get('/Region' , [AnalyticsController::class, 'getRegion']);
Route::get('/Entrie/{country_id}' , [AnalyticsController::class, 'getEntrie']);


Route::get('/Countrie/date{Countrie,date}' , [AnalyticsController::class, 'getEntrie_Fecha_Pais']);



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();


    
});
