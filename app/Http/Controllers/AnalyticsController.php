<?php


namespace App\Http\Controllers;
use App\Models\Region;
use App\Models\Entrie;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    public function index(){
     
return Region::all();

    }
}
