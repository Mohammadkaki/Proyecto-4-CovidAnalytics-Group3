<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Region;
use App\Models\Entrie;
use App\Models\Countrie;


class AnalyticsController extends Controller
{
    public function getRegion1() //$id
    {

        return Region::all();
        //return Region::find($id);
        //return Region::where('id', '=', $id)->get();
    }



    // #1-Listar todos los paises buscando por días.
    public function getEntrie2($date)
    {
        $fechaArray = explode('-', $date);

        return Entrie::with('country')->where('day', '=', $fechaArray[0])
            ->where('month', '=', $fechaArray[1])
            ->where('year', '=', $fechaArray[2])
            ->get();
    }



    // #2-Listar datos de un país concreto buscando por días.
    public function getEntrie3($country_id, $date)
    {

        $fechaArray = explode('-', $date);

        return Entrie::with('country')->where('country_id', '=', $country_id)
            ->where('day', '=', $fechaArray[0])
            ->where('month', '=', $fechaArray[1])
            ->where('year', '=', $fechaArray[2])
            ->get();
    }



    //#3 Listar todos los paises con el sumatorio de los datos.
    public function getEntrie1()
    {
        $suma = DB::table('entries')
            ->Join('countries', 'countries.id', '=', 'entries.country_id')
            ->select('entries.country_id', 'countries.countriesAndTerritories', DB::raw('SUM(entries.cases) AS cases'), DB::raw('SUM(entries.deaths) AS deaths'))
            ->groupBy('entries.country_id')
            ->get();
        return  ['suma' => $suma];
    }



    //#4-Listar un país concreto con el sumatorio de los datos
    public function getEntrie4($countriesAndTerritories)
    {   
        $paistotal= DB::table('entries')
        ->Join('countries','countries.id','=','entries.country_id')
        ->select('entries.country_id','countries.countriesAndTerritories',DB::raw('SUM(entries.cases) AS cases'),DB::raw('SUM(entries.deaths) AS deaths'))
        ->groupBy('entries.country_id')
        ->Where ('countriesAndTerritories', '=', $countriesAndTerritories)
        ->get();      
        return  ['suma' =>$paistotal];
       
  
    }
}
