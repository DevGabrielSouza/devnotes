<?php

namespace App\Http\Controllers;

use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Auth;


class CardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index(){
    }
    

    public function store(){
        return $_POST;
    }

    public function delete(Request $request){
        
    }

    //
}
