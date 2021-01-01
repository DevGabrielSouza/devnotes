<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder; 

class CardListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\CardList::factory()->count(4)->create(); 
    }
}
