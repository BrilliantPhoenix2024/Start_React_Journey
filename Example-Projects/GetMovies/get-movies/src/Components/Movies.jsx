import React, { useState } from "react";
import { movies as initialMovies } from "../services/fakeMovieServices";
import LikeComponent from "./common/LikeComponent";

const Movies = () => {
  const [movies, setMovies] = useState(initialMovies);

  const handleOnClick = (movieToDelete) => {
    // Filter out the movie to delete
    const updatedMovies = movies.filter(
      (movie) => movie._id !== movieToDelete._id
    );
    // Update state with the new movies array
    setMovies(updatedMovies);
  };

  const count = movies.length; // Use movies state to get the count
  if (count === 0) {
    return <p>There are no movies in the database.</p>;
  }

  return (
    <React.Fragment>
      <p>There are {count} movies in the database</p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <LikeComponent />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleOnClick(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Movies;
