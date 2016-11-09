<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Logo</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/signin.css" rel="stylesheet">

      <script src="ng2js/vendor.js"></script>
      <script src="ng2js/app.js"></script>

  </head>
  <body>
    <div class="container">
        @include('partials.header')

      @yield('content')

      <todo-app>Loading...</todo-app>

    </div>

    @include('partials.footer')

  </body>
</html>