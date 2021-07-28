<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Region;
use App\Models\Entrie;
use App\Models\Countrie;

class AnalyticsController extends Controller
{
    public function getCountries(){
        $countries = countries::all();
        return ['$countries' => $countries];
    }

    public function getEntries(){
        $entries = entries::all();
        return ['$entries' => $entries];
    }

    public function getRegions(){
        $regions = Regions::all();
        return ['$regions' => $regions];
    }
    // // public function getRegion() {
     
    // //     return Region::all();
    // }


    // // public function getEntrie(){
     
    // //     return Entrie::with('country')->paginate(5);
        
    // // }

//Listar los datos de cada pais buscando por días.

    // public function getEntrie($date){

    //     $fechaArray = explode('-',$date);
     
    //     return Entrie::with('country')->where('day', '=', $fechaArray[0])
    //                     ->where('month', '=', $fechaArray[1])
    //                     ->where('year', '=', $fechaArray[2])
    //                     ->get();
   
    // }

    //Listar un país concreto con el sumatorio de los datos
    public function getEntrie($country_id){

       // $fechaArray = explode('-',$date);
     
        return Entrie::with('country')->where('country_id', '=', $country_id)->get();
   
    }



    
////

// public function getSingleRegion($id, $nombre){
//     $region = Region::where('id', '=', $id)
//                     ->where('continentExp', '=', $nombre)->get();
//     return ['$region' => $region];
// }

}


