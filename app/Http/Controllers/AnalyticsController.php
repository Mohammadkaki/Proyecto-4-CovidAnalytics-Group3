<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Region;

class AnalyticsController extends Controller
{
    public function index(){
     
return Region::all();

    }
}
