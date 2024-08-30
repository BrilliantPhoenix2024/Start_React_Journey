import React, { useState } from "react";
import { movies as initialMovies } from "../services/fakeMovieServices";
import LikeComponent from "./common/LikeComponent";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate"; // Import the paginate function

const Movies = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Number of items per page

  const handleOnPageChange = (page) => {
    setCurrentPage(page); // Update the current page
  };

  const handleOnClick = (movieToDelete) => {
    const updatedMovies = movies.filter(
      (movie) => movie._id !== movieToDelete._id
    );
    setMovies(updatedMovies);
    // Reset current page if it exceeds the total pages after deletion
    if (currentPage > Math.ceil(updatedMovies.length / pageSize)) {
      setCurrentPage(Math.ceil(updatedMovies.length / pageSize));
    }
  };

  const count = movies.length; // Use movies state to get the count
  if (count === 0) {
    return <p>There are no movies in the database.</p>;
  }

  // Use the paginate function to get the movies for the current page
  const paginatedMovies = paginate(movies, currentPage, pageSize);

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
          {paginatedMovies.map((movie) => (
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
      <Pagination
        itemsCount={count} // Total number of movies
        pageSize={pageSize}
        onPageChange={handleOnPageChange}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
};

export default Movies;
