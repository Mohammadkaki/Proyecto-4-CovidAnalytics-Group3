<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Region;
use App\Models\Entrie;

class AnalyticsController extends Controller
{
    public function getRegion() {
     
        return Region::all();
    }


    // public function getEntrie(){
     
    //     return Entrie::with('country')->paginate(5);
        
    // }

//Listar los datos de cada pais buscando por días.

    public function getEntrie($date){

        $fechaArray = explode('-',$date);
     
        return Entrie::with('country')->where('day', '=', $fechaArray[0])
                        ->where('month', '=', $fechaArray[1])
                        ->where('year', '=', $fechaArray[2])
                        ->get();
   
    }

    //Listar datos de un país concreto buscando por días.
    
    // public function getEntrie($date){

    //     $fechaArray = explode('-',$date);
     
    //     return Entrie::where('day', '=', $fechaArray[0])
    //                     ->where('month', '=', $fechaArray[1])
    //                     ->where('year', '=', $fechaArray[2])
    //                     ->get();
   
    // }
}
