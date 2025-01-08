import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import { useNavigate, useParams } from "react-router-dom";
import { saveMovie, getMovie } from "../services/fakeMovieServices";
import { getGenres } from "../services/fakeGenreService";
import { toast } from "react-toastify";

const MovieForm = () => {
  const [data, setData] = useState({
    _id: "",
    title: "",
    genreId: "",
    numberInStock: "",
    dailyRentalRate: "",
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const { id: movieId } = useParams(); // Correctly destructuring useParams
  const genres = getGenres();

  const schema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string()
      .valid(...genres.map((g) => g._id))
      .required()
      .label("Genre")
      .error(() => new Error("Please select a valid genre from the list.")),
    numberInStock: Joi.number().min(0).required().label("Number In Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  });

  const validate = () => {
    const { _id, ...dataToValidate } = data;
    const result = schema.validate(dataToValidate, { abortEarly: false });
    if (!result.error) return null;

    const newErrors = {};
    for (let item of result.error.details)
      newErrors[item.path[0]] = item.message;
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    const newValue =
      name === "numberInStock" || name === "dailyRentalRate"
        ? Number(value)
        : value;
    setData({ ...data, [name]: newValue });
  };

  useEffect(() => {
    // If there's no movieId or it's explicitly "new", render empty form
    if (!movieId || movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) {
      navigate("/not-found");
      return;
    }

    setData(mapToViewModel(movie));
  }, [movieId, navigate]);


  const mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting..."); // 👈 Add this
    const errors = validate();
    setErrors(errors || {});
    console.log("Validation errors:", errors);
    if (errors) return;

    doSubmit();
  };

  const doSubmit = () => {
    console.log("Saving movie:", data); // 👈 Add this
    saveMovie(data);
    toast.success("Movie saved successfully!");
    navigate("/movies");
  };

  return (
    <div className="w-75 m-auto">
      <h1>Movie Form</h1>
      <form onSubmit={handleSubmit}>
        {renderInput("title", "Title", data.title, handleChange, errors.title)}
        {renderSelect(
          "genreId",
          "Genre",
          data.genreId,
          handleChange,
          errors.genreId,
          genres.map((genre) => ({ value: genre._id, label: genre.name })) // Ensure correct mapping
        )}
        {renderInput(
          "numberInStock",
          "Number In Stock",
          data.numberInStock,
          handleChange,
          errors.numberInStock,
          "number"
        )}
        {renderInput(
          "dailyRentalRate",
          "Rate",
          data.dailyRentalRate,
          handleChange,
          errors.dailyRentalRate,
          "number"
        )}
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

// Helper functions for rendering inputs and selects
const renderInput = (name, label, value, onChange, error, type = "text") => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      className="form-control"
      value={value}
      onChange={onChange}
    />
    {error && <div className="alert alert-danger">{error}</div>}
  </div>
);

const renderSelect = (name, label, value, onChange, error, options) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <select
      id={name}
      name={name}
      className="form-control"
      value={value}
      onChange={onChange}
    >
      <option value="">Select Genre</option> {/* 👈 Add this line */}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

    {error && <div className="alert alert-danger">{error}</div>}
  </div>
);

export default MovieForm;
