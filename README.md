# Ecn Wiztivi 22

# Installer le projet
```bash
npm i
```

# Développer
```bash
npm run dev
```

```js
/**
 * Récupérer une liste de film avec l'API TMDB
 * Créer un tableau contenant tous les titres de cette collection
 * Grâce à ce tableau de titre, rechercher chacun des films sur omdb et placer l'ensemble dans un nouveau tableau
 
 * Créer un tableau où tous les films sont ordonnés par leur titre (prop. Title)
 * Créer un tableau où tous les films sont ordonnés par leur année de réalisation (prop. Year)
 * Créer un tableau où tous les films sont ordonnés par classification parentale (prop. "Rated")
 
 * Créer un tableau contenant tous les genres (unique) des films de cette collection (prop. "Genre")
 * Créer un tableau contenant tous les réalisateurs (unique) des films de cette collection (prop. "Director")
 * Créer un tableau contenant tous les scénaristes (unique) des films de cette collection (prop. "Writer")
 * Créer un tableau contenant tous les acteurs (unique) des films de cette collection (prop. "Actors")
 * Créer un tableau contenant toutes les langues (unique) des films de cette collection (prop. "Language")
 * Créer un tableau contenant tous les pays (unique) des films de cette collection (prop. "Country")
 
 * Créer un tableau composé du TOP 5 des films selon leur metascore (prop. "Metascore")
 * Créer un tableau composé du TOP 5 des films selon leur rating IMDB (prop. "imdbRating")

 * Créer un tableau contenant tous les types de films (prop. "Type")
 * Calculer le nombre total de vote sur l'ensemble des films (prop. "imdbVotes")
 * Calculer la valeur total du box-office de tous les films (prop. "BoxOffice")
 * 
 * Final : Ordonner l'ensemble des films selon leur metascore puis,
 *         pour chaque film, convertir la prop. "Runtime" en un nombre de millisecondes puis,
 *         assigner le résultat de cette conversion à chaque film (objet) de votre collection
 *         à partir de l'heure courante, programmer chaque film les uns à la suite des autres
 */
```