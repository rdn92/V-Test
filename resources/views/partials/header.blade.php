<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/home" style="padding: 0px;">
        <img alt="Brand" style="width: 50px; border-radius: 2px;" src="img/logo.jpeg">
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
   <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
       @if (isset(Auth::user()->first_name))
         <ul class="nav navbar-nav navbar-right">
           <li class="dropdown">
             <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ Auth::user()->first_name }} <span class="caret"></span></a>
             <ul class="dropdown-menu">
               <li>
                 <a href="{{ url('/logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                   Log Out
                 </a>

                 <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                   {{ csrf_field() }}
                 </form>
               </li>
             </ul>
           </li>
         </ul>
       @endif
   </div><!-- /.navbar-collapse -->
 </div><!-- /.container-fluid -->
</nav>
