<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class UsersTableSeeder extends Seeder
{

    public function run()
    {
        DB::table('users')->insert([
            'first_name'     => 'Chris',
            'last_name' => 'Sevilleja',
            'email'    => 'asd@asd.com',
            'password' => 'asd',
            'company' => 'NN',
            'country' => 'Neverland',
        ]);
    }

}
