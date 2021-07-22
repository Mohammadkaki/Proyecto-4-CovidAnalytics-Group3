<?php


namespace App\Http\Controllers;
use APP\Models\Region;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    public function index(){
     
return Region::all();

    }
}
