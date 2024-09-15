// src/components/MovieTable.jsx
import React, { useState, useEffect } from "react";
import LikeComponent from "./common/LikeComponent";
import TableHeader from "./common/TableHeader"; // Import the new TableHeader component

const MovieTable = ({ movies, onDelete }) => {
  const [sortedMovies, setSortedMovies] = useState(movies);
  const [sortColumn, setSortColumn] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    setSortedMovies(movies);
  }, [movies]);

  const handleSort = (column) => {
    const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(order);

    const newSortedMovies = [...sortedMovies].sort((a, b) => {
      let aValue = column === "genre" ? a.genre.name : a[column];
      let bValue = column === "genre" ? b.genre.name : b[column];

      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });

    setSortedMovies(newSortedMovies);
  };

  return (
    <table className="table">
      <TableHeader
        onSort={handleSort}
        sortColumn={sortColumn}
        sortOrder={sortOrder}
      />
      <tbody>
        {sortedMovies.map((movie) => (
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
                onClick={() => onDelete(movie)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
