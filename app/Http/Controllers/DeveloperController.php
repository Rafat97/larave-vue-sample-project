<?php

namespace App\Http\Controllers;

use App\Models\Developer;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Http\Requests\StoreDeveloperRequest;
use App\Http\Requests\UpdateDeveloperRequest;

class DeveloperController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $request = request()->all();

            // $developers = Developer::paginate($request);
            $developers = Developer::orderBy("id","desc")->get();

            return response()->json([
                'data' => $developers
            ], 200);


        } catch (\Throwable  $ex) {
            // dd( $ex );
            return response()->json([
                'message' => $ex->getMessage(),
                'code' => $ex->getCode(),
                'trace' => $ex->getTrace()
            ], 400);

            return $ex;
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        return response()->json([], 400);

        // $request->validate([
        //     'first_name' => 'required',
        //     'last_name' => 'required',
        //     'email' => 'required|unique:email',
        //     'gender' => 'required',
        //     'image' => 'required|mimes:jpg,jpeg,png|max:2048',
        //  ]);

        // $new_developer = Developer::create($request->all());
        // return response()->json($new_developer, 201);
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreDeveloperRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreDeveloperRequest $request)
    {

        if ($request->image) {
            $imageName = time().'.'.$request->image->extension();
            $image_save_path = 'uploaded_image/developer_images/';
            // $request->image->move(public_path($image_save_path), $imageName);
            $path = $request->image->store($image_save_path, 'public');
            // echo $path ;
            // $full_image =  $image_save_path.$imageName;
            $full_image = $path;
        }

        $developer = new Developer;
        $developer->first_name = $request->first_name;
        $developer->last_name = $request->last_name;
        $developer->email = $request->email;
        $developer->gender = $request->gender;
        $developer->skills = $request->skills;
        $developer->image_path = $full_image;

        $developer->save();

        return response()->json($developer, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Developer  $developer
     * @return \Illuminate\Http\Response
     */
    public function show(Developer $developer)
    {
        return response()->json($developer, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Developer  $developer
     * @return \Illuminate\Http\Response
     */
    public function edit(Developer $developer)
    {
        //
        return response()->json($developer, 400);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDeveloperRequest  $request
     * @param  \App\Models\Developer  $developer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateDeveloperRequest $request, Developer $developer)
    {
        //
        if ($request->image) {
            $imageName = time().'.'.$request->image->extension();
            $image_save_path = 'uploaded_image/developer_images/';
            // $request->image->move(public_path($image_save_path), $imageName);
            $path = $request->image->store($image_save_path, 'public');
            // echo $path ;
            // $full_image =  $image_save_path.$imageName;
            $full_image = $path;
            $developer->image_path = $full_image;
        }

        $developer->first_name = $request->first_name;
        $developer->last_name = $request->last_name;
        // $developer->email = $request->email;
        $developer->gender = $request->gender;
        $developer->skills = $request->skills;

        $developer->save();
        return response()->json($developer, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Developer  $developer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Developer $developer)
    {
        //
        $developer->delete();
        return response()->json([
            'message' => "Delete Successfully"
        ], 201);
    }

    public function getAvatar(Request $request)
    {

        $request_path = "app/public/".$request->path;
        $path = storage_path($request_path);
        if(!File::exists($path)){
            echo "find";
            $path = storage_path('app/public/default/') . 'default_avatar.jpg';
        }

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = \Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;

    }
}
