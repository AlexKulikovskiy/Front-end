"use strict";

let numberOfFilms = +prompt ("Сколько фильмов вы уже посмторели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors:{

    },
    genser:[

    ],
    privat: false

};

let a = prompt("Один из последних просмотренных фильмов?");
let b = +prompt("На сколько оцените его?");
personalMovieDB.movies[a] = b;

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);