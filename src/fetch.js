import * as Api from './fetch_service.js'
import * as fs from 'fs';

// Fetch de la liste de films sur Tmdb
const basicMovieList = await Api.getMovieListFromTmdb(1);

// Extraction des titres
const titleList = await Api.getMoviesTitlesFromTmdbList(basicMovieList);

// Fetch de liste des détails de chaque film sur Omdb
const promisesDetailedMovieList = Api.getMovieDetailedListFromOmdb(titleList)

// Sauvegarde des détails des films dans un tableau après résolution de chaque promesse
const moviesFinalList = await Api.getPromiseList(promisesDetailedMovieList);

// Enregistrement de la liste dans un fichier texte
fs.writeFileSync('./src/localAPIModel.txt', JSON.stringify(moviesFinalList))