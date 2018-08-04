<?php

use Faker\Generator as Faker;

$factory->define(App\Categories::class, function (Faker $faker) {
    return [
        'name'=>$faker->name,
        'completed'=>$faker->boolean($chanceOfGettingTrue = 50) // true
    ];
});
