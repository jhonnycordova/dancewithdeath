<?php

namespace API\Http\Controllers;

use Illuminate\Http\Request;

use API\Http\Requests;
use API\Http\Controllers\Controller;
use Illuminate\Routing\Route;
use API\Appointment;
use Illuminate\Database\Eloquent\Model;


class AppointmentController extends Controller
{
    public function __construct(){
        $this->middleware('cors');
        $this->beforeFilter('@find', ['only' => ['show','update','destroy']]);
    }

    public function find(Route $route){
        $this->appointment = Appointment::find($route->getParameter('appointments'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $appointments = Appointment::all();

        return response()->json($appointments->toArray());
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function findDates(Request $request)
    {
      $date = $request->date;
      $appointments_date = Appointment::where('date', '=', $date)
               ->get();
      $time_array = array(); //Bussy Times
       foreach ($appointments_date as $appointment) {
          $time_array[] = $appointment->idtime;
          $time_array[] = $appointment->idtime - 1;
          $time_array[] = $appointment->idtime + 1;
       }
       $array_available = array();

       for ($i=1; $i <= 19 ; ++$i) {
         if(!in_array($i, $time_array)){
           $array_available[] = $i;
         }
       }

       $array_times_available = array();

       for ($i=0; $i <count($array_available) ; $i++) {
         if ($array_available[$i] == 1) {
            $name = "9:00";
         }else if($array_available[$i] == 2){
            $name = "9:30";
         }else if($array_available[$i] == 3){
            $name = "10:00";
         }else if($array_available[$i] == 4){
            $name = "10:30";
         }else if($array_available[$i] == 5){
            $name = "11:00";
         }else if($array_available[$i] == 6){
            $name = "11:30";
         }else if($array_available[$i] == 7){
            $name = "12:00";
         }else if($array_available[$i] == 8){
            $name = "12:30";
         }else if($array_available[$i] == 9){
            $name = "13:00";
         }else if($array_available[$i] == 10){
            $name = "13:30";
         }else if($array_available[$i] == 11){
            $name = "14:00";
         }else if($array_available[$i] == 12){
            $name = "14:30";
         }else if($array_available[$i] == 13){
            $name = "15:00";
         }else if($array_available[$i] == 14){
            $name = "15:30";
         }else if($array_available[$i] == 15){
            $name = "16:00";
         }else if($array_available[$i] == 16){
            $name = "16:30";
         }else if($array_available[$i] == 17){
            $name = "17:00";
         }else if($array_available[$i] == 18){
            $name = "17:30";
         }else if($array_available[$i] == 19){
            $name = "18:00";
         }
         $array_times_available[] = array('id'=>$array_available[$i], 'name'=>$name);
       }

       return response()->json($array_times_available);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {

        Appointment::create($request->all());
        return response()->json(["mensaje" => "creado correctamente"]);
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return response()->json($this->appointment);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $this->appointment->fill($request->all());
        $this->appointment->save();
        return response()->json(["mensaje"=>"Actualizada"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $this->appointment->delete();
        return response()->json(["mensaje"=>"Borrada"]);
    }
}
