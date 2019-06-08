<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    // Add this function
    public function main() {
        return view('main');
    }
}
