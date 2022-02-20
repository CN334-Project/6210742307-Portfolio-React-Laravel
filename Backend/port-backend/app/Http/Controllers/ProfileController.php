<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['Profile' => Profile::all()]);
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
            'Name' => 'required',
            'AboutMe' => 'required'
            ]);
            $Profile = new Profile;
            $Profile->Name = $request->Name;
            $Profile->AboutMe = $request->AboutMe;
            $Profile->save();
            return response()->json(['status' => $Profile->save()]);
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
            'Name' => 'required',
            'AboutMe' => 'required'
            ]);
            $Profile = Profile::find($id);
            $Profile->Name = $request->Name;
            $Profile->AboutMe = $request->AboutMe;
            $Profile->save();
            return response()->json(['status' => $Profile->save()]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Profile = Profile::find($id);
        return response()->json(['status' => $Profile->delete(), 'id' => $id]);
    }
}
