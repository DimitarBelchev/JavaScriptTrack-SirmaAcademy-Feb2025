function movies(commands) {
  let movies = [];

  commands.forEach((command) => {
    if (command.startsWith("addMovie ")) {
      let movieName = command.substring(9);
      movies.push({ name: movieName });
    } else if (command.includes(" directedBy ")) {
      let [movieName, director] = command.split(" directedBy ");
      let movie = movies.find((m) => m.name === movieName);
      if (movie) {
        movie.director = director;
      }
    } else if (command.includes(" onDate ")) {
      let [movieName, date] = command.split(" onDate ");
      let movie = movies.find((m) => m.name === movieName);
      if (movie) {
        movie.date = date;
      }
    }
  });

  movies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Spinderman 2 onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);

movies([
  "addMovie The Avengers",
  "addMovie Spiderman",
  "The Avengers directedBy Pesho Peshov",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
  "The Avengers directedBy Anthony Russo",
]);
