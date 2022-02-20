<?php

namespace App\Http\Controllers;

use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['Education' => Education::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'SName' => 'required',
            'Faculty' => 'required',
            'GPA' => 'required',
            'StartYear' => 'required',
            'EndYear' => 'required'
            ]);
            $Education = new Education;
            $Education->SName = $request->SName;
            $Education->Faculty = $request->Faculty;
            $Education->GPA = $request->GPA;
            $Education->StartYear = $request->StartYear;
            $Education->EndYear = $request->EndYear;
            $Education->save();
            return response()->json(['status' => $Education->save()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'SName' => 'required',
            'Faculty' => 'required',
            'GPA' => 'required',
            'StartYear' => 'required',
            'EndYear' => 'required'
            ]);
            $Education = Education::find($id);
            $Education->SName = $request->SName;
            $Education->Faculty = $request->Faculty;
            $Education->GPA = $request->GPA;
            $Education->StartYear = $request->StartYear;
            $Education->EndYear = $request->EndYear;
            $Education->save();
            return response()->json(['status' => $Education->save()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Education = Education::find($id);
        return response()->json(['status' => $Education->delete(), 'id' => $id]);
    }
}
