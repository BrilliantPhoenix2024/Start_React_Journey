import React, { useState, useEffect } from "react";
import LikeComponent from "./common/LikeComponent";
import TableComponent from "./common/TableComponent";
import { Link } from "react-router-dom";

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
      let aValue = column === "genre.name" ? a.genre.name : a[column];
      let bValue = column === "genre.name" ? b.genre.name : b[column];

      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });

    setSortedMovies(newSortedMovies);
  };

  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: () => <LikeComponent />, // Assuming LikeComponent is defined and imported
    },
    {
      key: "delete",
      content: (item) => (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(item)}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <TableComponent
      columns={columns}
      data={sortedMovies} // Use sortedMovies instead of movies
      sortColumn={sortColumn}
      sortOrder={sortOrder} // Pass sortOrder if needed
      onSort={handleSort} // Pass handleSort instead of onSort
    />
  );
};

export default MovieTable;
