import * as fs from 'fs';
import * as service from './src/utils.js';

// Lecture et parsing en JSON du fichier texte

const movieList = service.getMovieList();


// Exemple de récup. et affichage de données du fichier
// console.log(
// movieList.map(
//     movie => {
//         return {
//             title: movie.Title,
//             release_date: movie.Released,
//             runtime: timeConvert(movie.Runtime),
//             genre: movie.Genre,
//             synopsys: movie.Plot.slice(0, 100) + '...',
//             director: movie.Director,
//             actors: movie.Actors,
//             rating: movie.imdbRating + "/10",
//             poster: movie.Poster,
//             type: movie.Type
//         }
//     }
// )
// )

// Exemple de recherche dans l'array avec .filter()
// console.log(
// movieList.filter(function (e) {
//     return e.Title == 'Howard the Duck'
// })
// );


// Get rating min
// let min = Math.min(...movieList.map(item => Number.parseFloat(item.imdbRating)))
// let result = movieList.filter(item => Number.parseFloat(item.imdbRating) === min)
// console.log(result)


// Get rating max
// let max = Math.max(...movieList.map(item => Number.parseFloat(item.imdbRating)))
// let result2 = movieList.filter(item => Number.parseFloat(item.imdbRating) === max)
// console.log(result2)


// Recup le top 5
// const classement = service.topN(movieList, 5);
// console.log(
//     classement.map(e => {
//         return {
//             title: e.Title,
//             rating: e.imdbRating
//         }
//     }))



// Recup les différentes catégories unifiées
console.log(service.getCategoryList(movieList, "Country"))
console.log(service.getCategoryList(movieList, "Actors"))


// const sortedMovies = service.tri(movieList)
// console.log(sortedMovies)


console.log(new Date(Date.now() + 120 * 60 * 1000))

console.log(service.bingeWatching(movieList))