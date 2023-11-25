function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

Movie.prototype.getOverview = function() {
  return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
};

const movie = new Movie("Blue Is the Warmest Colour", "Abdellatif Kechiche", "drama", 2014, 7.7);

console.log(movie.getOverview())

/// 12 min