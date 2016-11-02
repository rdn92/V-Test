@extends('layouts.home')

@section('content')
<form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
 {{ csrf_field() }}
 <div class="form-group">
   <label class="control-label col-sm-2" for="email">Email:</label>
   <div class="col-sm-10">
     <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" required>
   </div>
 </div>
 <div class="form-group">
   <label class="control-label col-sm-2" for="pwd">Password:</label>
   <div class="col-sm-10">
     <input type="password" class="form-control" id="pwd" name="password" placeholder="Enter password" required>
   </div>
 </div>
 <div class="form-group">
   <label class="control-label col-sm-2" for="fname">First Name:</label>
   <div class="col-sm-10">
     <input type="text" class="form-control" id="fname" name="first_name" placeholder="Enter first name" required>
   </div>
 </div>
 <div class="form-group">
   <label class="control-label col-sm-2" for="lname">Last Name:</label>
   <div class="col-sm-10">
     <input type="text" class="form-control" id="lname" name="last_name" placeholder="Enter last name" required>
   </div>
 </div>
 <div class="form-group">
   <label class="control-label col-sm-2" for="company">Company:</label>
   <div class="col-sm-10">
     <input type="text" class="form-control" id="company" name="company" placeholder="Enter company" required>
   </div>
 </div>
 <div class="form-group">
   <label class="control-label col-sm-2" for="country">Country:</label>
   <div class="col-sm-10">
       <select class="form-control" id="country" name="country">
           <option value=""></option>
           @for ($i = 0; $i < count($countries); $i++)
               <option value="{{ $countries[$i] }}">{{ $countries[$i] }}</option>
           @endfor
       </select>
   </div>
 </div>
 @if ($errors->first())
     <div class="alert alert-warning" role="alert">
         <strong>{{ $errors->first() }}</strong>
     </div>
 @endif

 <div class="form-group">
   <div class="col-sm-offset-2 col-sm-10">
     <button type="submit" class="btn btn-primary">Register</button>
   </div>
 </div>
</form>
@endsection
