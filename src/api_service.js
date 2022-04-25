// Get liste des valeurs unifiées d'une propriété donnée
export function getMovieListProp(movieList = [], category = '') {
    const categoryListTmp = new Set();
    const authorizedCategories = ["Actors", "Country", "Director", "Genre", "Language", "Type", "Writer"]

    if (authorizedCategories.includes(category)) {
        movieList.forEach(movie => {
            movie[category]
                .split(", ")
                .forEach(e => categoryListTmp.add(e))
        })

        //Conversion du Set en Array (car Set pas convertible en JSON)
        let categoryListFinal = [];
        categoryListTmp.forEach(movie => {
            categoryListFinal
                .push(movie)
        });

        return categoryListFinal

    } else return false
}

// Get liste triée selon une propriété donnée
export function getMoviesSortedBy(movieList = [], prop = '') {
    const authorizedCategories = ["Title", "Metascore", "Rated", "Year", "imdbRating"]

    if (authorizedCategories.includes(prop)) {
        return movieList
            .sort((a, b) => {
                return a[prop].localeCompare(b[prop])
            })
            .map(movie => {
                return {
                    title: movie.Title,
                    [prop]: movie[prop]
                }
            })

    } else return false
}

// Get cumul de tous les éléments d'un champ de la liste
export function getMoviesSumOf(movieList = [], prop = '') {
    // Vérifie si valeur existe PUIS si elle ne commence pas par N (pour 'N/A')
    const valuesListTmp = movieList.map(movie => {
        if (movie[prop] != null) {
            if (!movie[prop].startsWith("N")) {
                // On enlève '$' et ',' pour les valeurs en dollard de "BoxOffice"
                return (Number.parseInt(movie[prop].replace(/[$,]/g, '')))
            } else {
                return 0
            }
        } else {
            return 0
        }
    })

    return valuesListTmp.reduce((sum, e) => {
        return sum + Number.parseInt(e);
    }, 0);
}

// Top 5 selon une prop donnée
export function getTopMoviesBy(movieList = [], prop) {
    return movieList
        .sort((a, b) => {
            return b[prop] - a[prop]
        })
        .slice(0, 5)
        .map(movie => {
            return movie.Title
        });
};

// // Get liste filtrée selon une catégorie donnée
// export function getMovieListProp(movieList = [], prop = '') {
//     const finalMovieList = [];

//     movieList.forEach(movie => {
//         movie[category]
//             .split(", ")
//             .forEach(e => categoryListTmp.add(e))
//     })

//     movieList.forEach(movie => {
//         if (movie[prop]) {
//             finalMovieList.push(movie)
//         }
//     })
// }

// Conversion durée en min -> heures+min
export function timeConvert(n) {
    const num = Number.parseInt(n);
    const hoursTmp = (num / 60);
    const hours = Math.floor(hoursTmp);
    const minutesTmp = (hoursTmp - hours) * 60;
    const minutes = Math.round(minutesTmp);
    return hours + "h " + minutes + "min";
}

// // Tri avec deux propriétés données
// export function getMoviesSortedByTwoProps(movieList = []) {
//     return movieList.sort((a, b) => {
//         return a.Title.localeCompare(b.Title) || a.Year.localeCompare(b.Year)
//     })
// }

// // Cumule les durées en ms de tous les films de la liste et les ajoute à la date actuelle
// export function bingeWatching(movieList = []) {
//     const cumul = movieList.reduce((acc, obj) => {
//         return acc + Number.parseInt(obj.runtime_ms);
//     }, 0);
//     return new Date(cumul + Date.now() + 120 * 60 * 1000)
// }