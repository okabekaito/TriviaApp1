<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Post;
use GuzzleHttp\Psr7\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts, 200);
    }

    public function create(Request $request)
    {
        $post = new Post;
        $post->menu = $request->menu;
        $post->num = $request->num;
        $post->description = $request->description;
        $post->save();
        return response()->json($post, 200);
    }

    public function edit(Request $request)
    {
        $post = Post::find($request->id);
        return $post;
    }

    public function update(Request $request)
    {
        $post = Post::find($request->id);
        $post->menu = $request->menu;
        $post->num = $request->num;
        $post->description = $request->description;
        $post->save();
        $posts = Post::all();
        return $posts;
    }

    public function delete(Request $request)
    {
        $post =  Post::find($request->id);
        $post->delete();
        $posts = Post::all();
        return $posts;
    }
}
