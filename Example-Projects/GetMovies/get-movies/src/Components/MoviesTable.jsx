// src/components/MovieTable.jsx
import React from "react";
import LikeComponent from "./common/LikeComponent";

const MovieTable = ({ movies, onDelete, onSort }) => {
  const handleSort = (column) => {
    onSort(column);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ cursor: "pointer" }} onClick={() => handleSort("title")}>
            Title
          </th>
          <th style={{ cursor: "pointer" }} onClick={() => handleSort("genre")}>
            Genre
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => handleSort("numberInStock")}
          >
            Stock
          </th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => handleSort("dailyRentalRate")}
          >
            Rate
          </th>
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
