<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function index()
    {
        // Todo
        return "get req ok!";
        return Auth::user()->todo()->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            "id_users" => "integer|required",
            "title" => "required",
        ]);

        return Auth::user()->todo()->create([
            'title' => $request->input('title'),
            'text' => $request->input('text'),
            'user_id' => Auth::user()->id,
        ]);

    }

    public function show($id)
    {
        return Auth::user()->todo()->find($id);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            "title" => "required",
        ]);

        $todo = Auth::user()->todo()->find($id);


        $todo->update([
            'title' => $request->input('title'),
            'text' => $request->input('text'),
            'user_id' => Auth::user()->id,
        ]);
        return $todo;
    }
    
    public function destroy($id)
    {
        Auth::user()->todo()->find($id)->delete();
        return $id;
    }
    
    public function check($id)
    {
        $todo = Auth::user()->todo()->find($id);


        $todo->update([
            "completed" => "completed" === 0 ? 1 : 0
        ]);
        return $todo;

    }
}
