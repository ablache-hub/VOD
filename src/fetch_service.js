import fetch from 'node-fetch';
import * as fs from 'fs'

// Fetch de la liste de films sur Tmdb
export async function getMovieListFromTmdb(listNumber = '') {
    return fetch('https://api.themoviedb.org/3/list/' + listNumber + '?api_key=7248330eaedc659a3fb3ab4ff9069bc2&language=en-US')
        .then(res => res.json())
}

// Extraction des titres de la liste Tmdb
export function getMoviesTitlesFromTmdbList(movieList = []) {
    return movieList.items.map((movie) => {
        return {
            Tmdb_Id: movie.id,
            title: movie.title
        };
    })
}

// Fetch de liste des détails de chaque film sur Omdb grâce aux titres
export async function getMovieDetailedListFromOmdb(movieTitleList = []) {
    return movieTitleList.map(async (movie) => {
        return fetch('http://www.omdbapi.com/?apikey=14183770&t=' + movie.title)
            .then(res => res.json())
    })
}

// Sauvegarde des détails des films dans un tableau après résolution de chaque promesse
// Méthode alternative avec Promise.all
// const movies = await Promise.all(promises);
export async function getPromiseList(movieList = []) {
    const moviesFinalList = [];
    for (let promise of movieList) {
        let movie = await promise;
        // Certains films ne sont pas trouvés dans la seconde base, on enregistre donc que les réponses positives
        if (movie.Response == 'True') {
            // Ajout de la durée en ms directement dans l'objet
            
            movie = {
                ...movie,
                ...{
                    runtime_ms: Number.parseInt(movie.Runtime) * 60 * 1000
                }
            };
            moviesFinalList.push(movie)
        }
    }
    return moviesFinalList;
}

// Lecture du JSON
export function getMovieList() {
    return JSON.parse(fs.readFileSync('./src/localAPIModel.txt'))
}