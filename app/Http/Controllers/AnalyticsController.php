<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Region;
use App\Models\Entrie;

class AnalyticsController extends Controller
{
    public function index(){
     
return Region::all();

    }


    public function index2(){
     
        return Entrie::all();
        
            }


}
