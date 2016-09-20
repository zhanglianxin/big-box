<!-- 存放在 resources/views/child.blade.php -->

@extends('layouts.main')

@section('title', '济南第二监狱文件分享系统 - Share Box')


@section('content')

    <style>

        html {
            height:100%;
        }

		{{-- 页面背景：满屏，渐变 --}}
        body {
            margin: 0;
            padding: 0;
            height:100%;
            background:linear-gradient(45deg, 
            	rgba(255,255,255,0), rgba(255,255,255,0.4) 70%,
            	rgba(255,255,255,1)),url("images/girl.jpg");
            background-repeat: no-repeat;
            background-size:100% 100%;
        }

		{{-- 标题和各个面板的容器 --}}
        .content{
            position:absolute;
            top:10%;
            left:2%;
        }


		{{-- 标题的样式 --}}
        .title{
            color: #f0f0f0;
            font-family: "幼圆";
			font-weight: 900;
            letter-spacing:6px;
            line-height: 120px;
            font-size: 120px;
        }


		{{-- 版本信息的样式 --}}
        .bottom{
            position:absolute;
            bottom:1%;
            left:2%;
            color:grey;
        }


		{{-- 主按钮面本的样式 -----------------------}}
        #btn-panel{
			transition:opacity 0.5s;
		}

		{{-- 主按钮的样式 --}}
        .mybtn{
        	font-family: "幼圆";
            line-height: 24px;
            font-size: 24px;
			margin-top: 30px;
			margin-left: 60px;
        }



		{{-- 下载面板的样式 ----------------------}}
        #download-panel{
        	margin-top:30px;
        	opacity:0;
        	transition:opacity 5s;
        }

        #download-panel span{
        	color:white;
        	line-height: 24px;
            font-size: 24px;
        }

        #download-panel input{
        	height: 36px;
        	width: 90px;
        	line-height: 20px;
            font-size: 20px;
            margin-left: 30px;
            border-radius:3px;
            border:1px solid;
            border-color: white;
            box-shadow: 1px 1px 5px #888888;
        }

        #download-panel button{
        	height: 36px;
        	width: 90px;
        	line-height: 20px;
            font-size: 20px;
            margin-left: 30px;
            background-color: lightblue;
            color:#f0f0f0;
            border-radius:3px;
            border:1px solid;
            border-color:lightblue; 
        }

		

    </style>



    <div class="content">

    	<h1 class="title">BLACK BOX</h1>

    	<div id="btn-panel" >
	        <a id="btn-download" class = "mybtn btn btn-success btn-lg">获取</a>
	        <a class = "mybtn btn btn-warning btn-lg">分享</a>
	    </div>

	    <div id="download-panel" style="display:none;">
	        <form >
				<span>请输入提取码</span>
			    <input  id="inputEmail" maxlength="6" placeholder="提取码">

			    <button >获取</button>
			</form>
	    </div>
    </div>

    <div class="bottom">
		© 2016 | 济南第二监狱 | 文件分享系统 
    </div>


	<script>
		$("#btn-download").click(function(){

			$("#btn-panel").css("opacity","0");
			setTimeout(function(){
		         $("#btn-panel").css("display","none");
		         $("#download-panel").css("display","block");
		    	$("#download-panel").css("opacity","1");
		    },600);

			
		});
	</script>





@endsection