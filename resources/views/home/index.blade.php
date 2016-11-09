
@extends('layouts.home')

@section('content')
  @if (Auth::guest())
  <a href="/login" class="btn btn-primary">Login</a>
  <a href="/register" class="btn btn-primary">Register</a>
  @else
  @endif
@endsection