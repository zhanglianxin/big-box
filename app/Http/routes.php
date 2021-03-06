<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/fetchfile/{fetchcode}', function ($fetchcode) {
    $file = App\File::where('fetchcode', $fetchcode)->firstOrFail();

    //$filename =  iconv('utf-8', 'gbk', $file->filename);
    //$content = file_get_contents("d:\\" . $fetchcode . '_' . $filename);

    $filename =  $file->filename;
    $content = file_get_contents("/home/myqiao/upload/" . $fetchcode . '_' . $filename);

    return Response::make($content, 200)->header("Content-Disposition",
        "attachment;filename='" . $filename . "'");


});

Route::get('/fetchcode/{fetchcode}', function ($fetchcode) {
    $file = App\File::where('fetchcode', $fetchcode)->first();

    //$filename =  iconv('utf-8', 'gbk', $file->filename);
    //$content = file_get_contents("d:\\" . $fetchcode . '_' . $filename . ".txt");

    $filename =  $file->filename;
    $content = file_get_contents("/home/myqiao/upload/" . $fetchcode . '_' . $filename . ".txt");
    return Response::make($content, 200);
});

Route::get('/fileinfo/{fetchcode}', function ($fetchcode) {
    App\File::where('fetchcode', $fetchcode)->firstOrFail();
    return Response::make("Ok", 200);
});

Route::post('/upload', function (Request $request) {

	//获取上传文件对象
    $file = $request->file('file');
    $ori_filename = $file->getClientOriginalName();

    //判断字符集，获取文件名
    if (PATH_SEPARATOR == ':') // 'Linux';
            $filename = $ori_filename;
        else
            $filename =  iconv('utf-8', 'gbk', $ori_filename);

    //创建提取码

    $fetchcode= (string)rand(0,9) . (string)rand(0,9) . (string)rand(0,9) . (string)rand(0,9) . (string)rand(0,9) . (string)rand(0,9);

    //保存文件
    //$file->move("d:", $fetchcode . '_' . $filename);
    $file->move("/home/myqiao/upload/", $fetchcode . '_' . $filename);


    //将相关信息写入数据库
    $obj = new App\File();
    $obj->filename=$ori_filename;
    $obj->fetchcode=$fetchcode;
    $obj->save();

    //生成提取码文件
    $file = fopen("/home/myqiao/upload/" . $fetchcode . '_' . $filename . ".txt",'w');
    fwrite($file,"提取码：" . $fetchcode . "\r\n");
    fwrite($file,"文件名：" . $ori_filename);
    fclose($file);

    //返回一个 JSON 对象
    return json_encode(['filename'=>$ori_filename,'fetchcode'=>$fetchcode]);
});