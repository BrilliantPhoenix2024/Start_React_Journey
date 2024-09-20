// src/components/MovieTable.jsx
import React, { useState, useEffect } from "react";
import TableHeader from "./common/TableHeader"; // Import the TableHeader component
import TableBody from "./common/TableBody"; // Import the new TableBody component
import LikeComponent from "./common/LikeComponent";

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

  const columns = [
    { path: "title", label: "Title" },
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
    <table className="table">
      <TableHeader
        columns={columns}
        onSort={handleSort}
        sortColumn={sortColumn}
        sortOrder={sortOrder}
      />
      <TableBody data={sortedMovies} onDelete={onDelete} columns={columns} />
    </table>
  );
};

export default MovieTable;
