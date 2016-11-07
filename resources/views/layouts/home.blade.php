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

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

      <script>
          <?php
          include('../node_modules/core-js/client/shim.min.js');
          ?>
      </script>
      <script>
          <?php
          include('../node_modules/zone.js/dist/zone.js');
          ?>
      </script>
      <script>
          <?php
          include('../node_modules/reflect-metadata/Reflect.js');
          ?>
      </script>
      <script>
          <?php
          include('../node_modules/systemjs/dist/system.src.js');
          ?>
      </script>
      <script>
          <?php
          include('../systemjs.config.js');
          ?>
      </script>
      <script>
          System.import('../../../assets/ts/app').catch(function(err){ console.error(err); });
      </script>

  </head>
  <body>
    <div class="container">
      <my-app>Loading...</my-app>
      @include('partials.header')

      @yield('content')

    </div>

    @include('partials.footer')

  </body>
</html>
