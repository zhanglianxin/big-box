<!-- 存放在 resources/views/child.blade.php -->

@extends('layouts.main')

@section('title', '济南第二监狱文件分享系统 - Share Box')


@section('content')

    <style>

        html {
            height:100%;
        }

        body {
            margin: 0;
            padding: 0;
            height:100%;
        }

        #content {
            margin: 0 auto;
            width: 100%;
            height:100%;
            background:url("images/girl.jpg");
            background-repeat: no-repeat;
            background-size:100% 100%;
        }

        h1{
            color: #f0f0f0;
            font-family: "幼圆";

            letter-spacing:10px;
            line-height: 120px;
            font-size: 120px;
        }

        .btn-group{
            position:absolute;
            top:10%;
            left:2%;
        }

    </style>



    <div  id="content">



        <div class="btn-group">
            <h1>BLACK BOX</h1>
            <a class = "btn btn-primary btn-lg" role = "button">了解更多</a>
            <a class = "btn btn-primary btn-lg" role = "button">了解更多</a>
        </div>


    </div>




@endsection