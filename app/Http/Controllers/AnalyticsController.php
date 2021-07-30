<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Region;
use App\Models\Entrie;
use App\Models\Countrie;

class AnalyticsController extends Controller
{
    


//#1-Listar los datos de cada pais buscando por días.

    // public function getEntrie($date){

    //     $fechaArray = explode('-',$date);
     
    //     return Entrie::with('country')->where('day', '=', $fechaArray[0])
    //                     ->where('month', '=', $fechaArray[1])
    //                     ->where('year', '=', $fechaArray[2])
    //                     ->get();
   
    // }


    //#2-Listar datos de un país concreto buscando por días.
     
//  public function getEntrie($country_id, $date){

//        $fechaArray = explode('-',$date);
     
//         return Entrie::with('country')->where('country_id', '=', $country_id)
//         ->where('day', '=', $fechaArray[0])
//         ->where('month', '=', $fechaArray[1])
//         ->where('year', '=', $fechaArray[2])
//         ->get();
   
//     }


// #3 - Listar todos los paises con el sumatorio de los datos. (cases , death ,A_N_F_14_days_of_COVID )

   public function getEntrie(){

    // $UI = Entrie::with('country')->get();
    
    $categorias = Entrie::with('country')->select('')->sum('cases');



      echo "cases ",': ' , $categorias;
   
    }



    //#4-Listar un país concreto con el sumatorio de los datos
    // public function getEntrie($country_id){

         
    //     return Entrie::with('country')->where('country_id', '=', $country_id)->get();
   
    // }



    


}


