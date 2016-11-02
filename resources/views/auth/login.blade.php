@extends('layouts.home')

@section('content')
      <form class="form-signin" method="POST" action="{{ url('/login') }}">
        {{ csrf_field() }}
        <h2 class="form-signin-heading">Please log in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
      </form>
@endsection
