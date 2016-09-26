<!-- 存放在 resources/views/child.blade.php -->

@extends('layouts.main')

@section('title', '济南第二监狱文件分享系统 - Share Box')


@section('content')

    <input type="text" maxLength="1" value="1"  onfocus="this.select();"/>;
    <input type="text" maxLength="1" value="2" onfocus="this.select();"/>;
    <input type="text" maxLength="1" value="3" autofocus onfocus="this.select();"/>;
    <input type="text" maxLength="1" value="4" onfocus="this.setSelectionRange(0, 1);  "/>;
    <input type="text" maxLength="1" value="5" onfocus="this.select();"/>;

@endsection