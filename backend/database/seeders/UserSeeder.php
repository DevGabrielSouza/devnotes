<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Gabriel Souza',
            'username' => 'devgabrielsouza',
            'password' => 'password',
            'avatar' => 'https://avatars0.githubusercontent.com/u/44179376?s=400&u=a8a6524a7e43f036d37456c1bf9d173c79679cb7&v=4',
        ]);
    }
}
