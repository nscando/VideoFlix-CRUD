const { moviesMock } = require('../utils/mocks/movies')

class MoviesService {
     async getMovies() {
          const movies = await Promise.resolve(moviesMock);
          return movies || [];
     }

     async getMovie() {
          const movie = await Promise.resolve(moviesMock[0]);
          return movie || {};
     }

     async createMovie() {
          const createMovieId = await Promise.resolve(moviesMock[0].id);
          return createMovieId;
     }

     async updateMovie() {
          const updatedMovie = await Promise.resolve(moviesMock[0].id);
          return updatedMovie;
     }

     async deleteMovie() {
          const deletedMovie = await Promise.resolve(moviesMock[0].id);
          return deletedMovie;
     }

     async patchMovie() {
          const patchedMovie = await Promise.resolve(moviesMock[0].id)
          return patchedMovie;
     }
};

module.exports = MoviesService;