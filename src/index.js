import express from "express";
import fetch from "node-fetch";
import * as api from "./api_service.js"
import {getMovieList} from "./fetch_service.js"

const app = express();
app.listen(8080)
var movieList = getMovieList();


// Get liste de films (Tmdb)
app.get('/movies', async (_request, reponseFromExpress) => {
    const {
        items
    } = await fetch('https://api.themoviedb.org/3/list/1?api_key=7248330eaedc659a3fb3ab4ff9069bc2&language=en-US')
        .then(responseFromFetch => responseFromFetch.json())
    return reponseFromExpress.json(items)
})

// Get un film par son titre (Omdb)
app.get('/movies/:title', async (request, reponse) => {
    const {
        title
    } = request.params;
    if (typeof title === 'string' && title.length > 0) {
        const movie = await fetch('http://www.omdbapi.com/?apikey=14183770&t=' + title)
            .then(res => res.json())
        return reponse.json(movie)
    }
})

// Get liste des valeurs unifiées d'une propriété donnée
app.get('/category/:prop', async (request, response) => {
    try {
        const {
            prop
        } = request.params;
        const getCategoryContent = api.getMovieListProp(movieList, prop)
        if (getCategoryContent === false) {
            return response.status(400).json({
                error: 'Mauvaise catégorie',
                authorized: "Actors, Country, Director, Genre, Language, Type, Writer"
            })
        } else {
            return response.status(200).json(getCategoryContent)
        }
    } catch {
        return response.status(500)
    }
})

// Get liste triée selon une propriété donnée
app.get('/tri/:prop', async (request, response) => {
    try {
        const {
            prop
        } = request.params;
        const getSortedContent = api.getMoviesSortedBy(movieList, prop)
        if (getSortedContent === false) {
            return response.status(400).json({
                error: "Mauvaise catégorie",
                authorized: "Title, Metascore, Rated, Year, imdbRating"
            })
        } else {
            return response.status(200).json(getSortedContent)
        }
    } catch {
        return response.status(500)
    }
})

// Get cumul de tous les éléments d'un champ de la liste
app.get('/sum/:prop', async (request, response) => {
    const {
        prop
    } = request.params;
    const getSumContent = api.getMoviesSumOf(movieList, prop);
    return response.status(200).json(getSumContent)
})

// Top 5 selon une prop donnée
app.get('/top/:prop', async (request, response) => {
    const {
        prop
    } = request.params;
    const getTopContent = api.getTopMoviesBy(movieList, prop);
    return response.status(200).json(getTopContent)
})