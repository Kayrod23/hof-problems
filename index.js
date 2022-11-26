const movies = [
  {
    actors: "Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader",
    awards: "Won 1 Oscar. Another 99 wins & 116 nominations.",
    boxOffice: "$356,921,711",
    country: "USA",
    releasedOnDVD: "03 Nov 2015",
    director: "Pete Docter, Ronnie Del Carmen(co-director)",
    genre: "Animation, Adventure, Comedy, Drama, Family, Fantasy",
    language: "English, Portuguese",
    metascore: "94",
    plot: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
    production: "Pixar Animation Studios, Walt Disney Pictures",
    rated: "PG",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "8.1/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "98%",
      },
      {
        source: "Metacritic",
        value: "94/100",
      },
    ],
    released: "19 Jun 2015",
    response: "True",
    runtime: "95 min",
    title: "Inside Out",
    type: "movie",
    website: "N/A",
    writer:
      "Pete Docter (original story by), Ronnie Del Carmen (original story by), Pete Docter (screenplay by), Meg LeFauve (screenplay by), Josh Cooley (screenplay by), Michael Arndt (additional story material by), Simon Rich (additional story material by), Bill Hader (additional dialogue by), Amy Poehler (additional dialogue by)",
    imdbID: "tt2096673",
    imdbRating: "8.1",
    imdbVotes: "637,213",
  },
  {
    actors: "Craig T. Nelson, Holly Hunter, Sarah Vowell",
    awards: "Nominated for 1 Oscar. 12 wins & 78 nominations total",
    boxOffice: "$608,581,744",
    country: "United States",
    releasedOnDVD: "23 Oct 2018",
    director: "Brad Bird",
    genre: "Animation, Action, Adventure",
    language: "English",
    metascore: "80",
    plot: "The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg",
    production: "Pixar Animation Studios, Walt Disney Pictures",
    rated: "PG",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "7.6/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "93%",
      },
      {
        source: "Metacritic",
        value: "80/100",
      },
    ],
    released: "15 Jun 2018",
    response: "True",
    runtime: "118 min",
    title: "Incredibles 2",
    type: "movie",
    website: "N/A",
    writer: "Brad Bird",
    imdbID: "tt3606756",
    imdbRating: "7.6",
    imdbVotes: "260,243",
  },
  {
    actors: "Auli'i Cravalho, Dwayne Johnson, Rachel House",
    awards: "Nominated for 2 Oscars. 20 wins & 90 nominations total",
    boxOffice: "$248,757,044",
    country: "United States",
    releasedOnDVD: "21 Feb 2017",
    director: "Ron Clements, John Musker, Don Hall",
    genre: "Animation, Adventure, Comedy",
    language: "English, French",
    metascore: "81",
    plot: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg",
    production: "Walt Disney Animation Studios",
    rated: "PG",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "7.6/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "95%",
      },
      {
        source: "Metacritic",
        value: "81/100",
      },
    ],
    released: "23 Nov 2016",
    response: "True",
    runtime: "107 min",
    title: "Moana",
    type: "movie",
    website: "N/A",
    writer: "Jared Bush, Ron Clements, John Musker",
    imdbID: "tt3521164",
    imdbRating: "7.6",
    imdbVotes: "287,134",
  },
  {
    actors: "Jay Baruchel, Gerard Butler, Craig Ferguson, America Ferrera",
    awards: "Nominated for 2 Oscars. Another 25 wins & 61 nominations.",
    boxOffice: "$217,581,231",
    country: "USA",
    releasedOnDVD: "25 Nov 2015",
    director: "Dean DeBlois, Chris Sanders",
    genre: "Animation, Action, Adventure, Family, Fantasy",
    language: "English",
    metascore: "75",
    plot: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg",
    production: "DreamWorks Animation, Vertigo Entertainment",
    rated: "PG",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "8.1/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "99%",
      },
      {
        source: "Metacritic",
        value: "75/100",
      },
    ],
    released: "26 Mar 2010",
    response: "True",
    runtime: "98 min",
    title: "How to Train Your Dragon",
    type: "movie",
    website: "N/A",
    writer:
      "William Davies (screenplay by), Dean DeBlois (screenplay by), Chris Sanders (screenplay by), Cressida Cowell (based on the book by), Marc Hyman (collaborating writer)",
    imdbID: "tt0892769",
    imdbRating: "8.1",
    imdbVotes: "681,600",
  },
  {
    actors: "Simon Callow, Richard Dreyfuss, Jane Leeves, Joanna Lumley",
    awards: "Nominated for 1 Oscar. Another 4 wins & 12 nominations.",
    boxOffice: "$28,946,127",
    country: "UK, USA",
    releasedOnDVD: "13 Dec 2015",
    director: "Henry Selick",
    genre: "Animation, Adventure, Family, Fantasy, Musical",
    language: "English",
    metascore: "78",
    plot: "An orphan who lives with his two cruel aunts befriends anthropomorphic bugs who live inside a giant peach, and they embark on a journey to New York City.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTNkNWIwNGUtNTJlOC00NDU3LTk0NWEtNjNjNDM4NzRiNThkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    production: "Walt Disney Pictures, Skellington Productions",
    rated: "PG",
    ratings: [
      {
        source: "Internet Movie Database",
        value: "6.7/10",
      },
      {
        source: "Rotten Tomatoes",
        value: "91%",
      },
      {
        source: "Metacritic",
        value: "78/100",
      },
    ],
    released: "12 Apr 1996",
    response: "True",
    runtime: "79 min",
    title: "James and the Giant Peach",
    type: "movie",
    website: "N/A",
    writer:
      "Roald Dahl (based on the book by), Karey Kirkpatrick (screenplay), Jonathan Roberts (screenplay), Steve Bloom (screenplay)",
    imdbID: "tt0116683",
    imdbRating: "6.7",
    imdbVotes: "61,668",
  },
];
/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` and `exampleSongData` variables below to gain access to arrays of movies or songs.

  Keep in mind that your functions must still have and use a parameter for accepting all movies or songs.
*/
const exampleMovies = require("./data/movies");
const exampleSongData = require("./data/songs");
// Do not change the lines above.

/*
 * MAP PROBLEMS
 */

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let getAllMovieNames = movies.map (movie => movie.title);
  return getAllMovieNames;
}

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */
function getSongTitles(songs) {
  let getAllSongNames = songs.map (song => song.title);
  return getAllSongNames;
}

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */
function getSongDetails(songs) {
  let getAllSongDetails = songs.map (song => `${song.title} by ${song.artist}`);
  return getAllSongDetails;
}

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */
function getTitleAndArtist(songs) {
  let getTitleAndArtist = songs.map (song => {
    let obj = {};
    obj[song.title] =song.artist;
    return obj;
  });
  return getTitleAndArtist;
}

/**
 * FIND PROBLEMS
 */

/**
 * Returns the song "Pink Elephants" from the song array, if it is in the array.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findPinkElephantsByTimestreet(songs) {
  let found = songs.find (song => song.title === "Pink Elephants");
  return found;
}

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstSongUnderThreeMinutes(songs) {
  let found = songs.find (song => song.runtimeInSeconds < 180);
  return found;
}

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstTitleTrack(songs) {
  let found = songs.find (song => song.title === song.album);
  return found;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  let found = movies.find(movie => movie.imdbID === id);
  if (!movies.length || found === undefined) {
    return null;
  }
  return found;
}

/**
 * FILTER PROBLEMS
 */

/**
 * Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getSongsBySaib(songs) {
  let bySaib = songs.filter(song => song.artist === "Saib");
  return bySaib;
}

/**
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getSongsOverThreeMinutes(songs) {
  let over3Min = songs.filter(song => song.runtimeInSeconds > 180);
  return over3Min;
}

/**
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getTitleTracks(songs) {
  let sameTitleAndAlbumName = songs.filter(song => song.title === song.album);
  return sameTitleAndAlbumName;
}
/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let filtered = movies.filter(movie => 
    movie.genre.toLowerCase().split(", ").includes(genre.toLowerCase()));
    return filtered;
}
// const answer = [];
// for (let i = 0; i < movies.length; i++) {
//   if (
//     movies[i].genre.toLowerCase().split(", ").includes(genre.toLowerCase())
//   ) {
//     answer.push(movies[i]);
//   }
// }

// return answer;

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let filtered = movies.filter(movie => {
    let movieSplit = movie.released.split(" ")
    if(parseInt(movieSplit[2]) <= year) {
      return movie
    }});
  return filtered; 
}

/*
 * REDUCE PROBLEMS
 */

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  if (!movies.length) {
    return 0;
  }
  let reduced = movies.reduce((biggestScore, movie) => {
    if (parseInt(movie.metascore) > parseInt(movies[0].metascore)) {
      biggestScore = parseInt(movie.metascore);
    } 
    return biggestScore;
}, parseInt(movies[0].metascore));
return reduced
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  if (!movies.length) {
    return 0;
  }
  let reduced = movies.reduce((sum, movie) => 
    sum + parseFloat(movie.imdbRating), 0)
  reduced = parseFloat(reduced) / parseInt(movies.length)
  return reduced
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let reduced = movies.reduce((answer, movie) => {
    if (answer[movie.rated] === undefined) {
    answer[movie.rated] = 0;
    }
    answer[movie.rated]++;
    return answer;
  }, {});
  return reduced
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */

function getBiggestBoxOfficeMovie(movies) {
  let biggest = 0
  let reduced = movies.reduce((answer, movie) => {
  let boxOfficeCash = movie.boxOffice.split(",").join("")
  boxOfficeCash = boxOfficeCash.slice(1)
  if (parseInt(boxOfficeCash) > biggest) {
    answer = movie.title
    biggest = parseInt(boxOfficeCash)
  }
  return answer
}, null);
  return reduced
}

getBiggestBoxOfficeMovie(movies)
/**
 * SOME/EVERY PROBLEMS
 */

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function allSongsAreOverTwoMinutes(songs) {}

/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsOverFourMinutes(songs) {}

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsByPeanut(songs) {}

// Do not change anything below this line.
module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks,
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
