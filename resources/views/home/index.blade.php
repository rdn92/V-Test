<<<<<<< dcf4e3aa5b6c5c21245c8f0756a643883fbd02fc
{{--@extends('layouts.home')--}}

{{--@section('content')--}}
  {{--@if (Auth::guest())--}}
  {{--<a href="/login" class="btn btn-primary">Login</a>--}}
  {{--<a href="/register" class="btn btn-primary">Register</a>--}}
  {{--@else--}}
    {{--<my-app>Loading...</my-app>--}}
  {{--@endif--}}
{{--@endsection--}}

<html>
<head>
  <title>Angular QuickStart</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <style>

    .done {
      text-decoration: line-through;
    }
  </style>
</head>
<!-- 3. Display the application -->
<body>
<todo-app>Loading...</todo-app>

<script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>
=======
@extends('layouts.home')

@section('content')
  @if (Auth::guest())
  <a href="/login" class="btn btn-primary">Login</a>
  <a href="/register" class="btn btn-primary">Register</a>
  @else
  @endif
@endsection
>>>>>>> working
