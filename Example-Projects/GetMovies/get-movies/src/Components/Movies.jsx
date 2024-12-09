import React, { useState, useEffect } from "react";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import { paginate } from "../utils/paginate"; // Import the paginate function
import { getMovies } from "../services/fakeMovieServices";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./MoviesTable"; // Import the new MoviesTable component
import SearchBox from "./common/SearchBox";
import _ from "lodash";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Number of items per page
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genres, setGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" }); // Define sortColumn

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setSearchQuery("");
    setCurrentPage(1); // Reset to the first page when a new genre is selected
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedGenre(null);
    setCurrentPage(1);
  };

  useEffect(() => {
    const genresData = getGenres();
    setGenres([{ _id: "", name: "All Genres" }, ...genresData]); // Add "All Genres" option
  }, []);

  const handleOnPageChange = (page) => {
    setCurrentPage(page);
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

  // Filter movies based on selected genre and search query
  let filteredMovies = movies;
  if (searchQuery)
    filteredMovies = movies.filter((m) =>
      m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  else if (selectedGenre && selectedGenre._id)
    filteredMovies = movies.filter(
      (movie) => movie.genre._id === selectedGenre._id
    );

  // Sort movies
  const sorted = _.orderBy(
    filteredMovies,
    [sortColumn.path],
    [sortColumn.order]
  );

  const count = sorted.length; // Use sorted movies for count
  if (count === 0) {
    return <p>There are no movies in the database.</p>;
  }

  // Use the paginate function to get the movies for the current page
  const paginatedMovies = paginate(filteredMovies, currentPage, pageSize);

  return (
    <div className="row">
      <div className="col-3">
        <ListGroup
          items={genres} // Pass the genres array to ListGroup
          selectedItem={selectedGenre} // Pass the currently selected genre
          onItemSelect={handleGenreSelect} // Handle genre selection
        />
      </div>
      <div className="col">
        <Link to="/movies/new" className="btn btn-primary mb-2">
          New Movie
        </Link>

        <p>There are {count} movies in the database</p>
        <SearchBox value={searchQuery} onChange={handleSearch} />
        <MoviesTable movies={paginatedMovies} onDelete={handleOnClick} />
        <Pagination
          itemsCount={count} // Total number of filtered movies
          pageSize={pageSize}
          onPageChange={handleOnPageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Movies;
