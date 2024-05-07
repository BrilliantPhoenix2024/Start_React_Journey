import React, { useReducer, useRef, useState } from "react";
import { formReducer, initialSate } from "../formReducer/formReducer";

const Form = () => {
  //   const [product, setProduct] = useState({
  //     title: "",
  //     description: "",
  //     price: 0,
  //     category: "",
  //     tags: [],
  //     quantity: 0,
  //   });

  const tagRef = useRef();

  const [state, dispatch] = useReducer(formReducer, initialSate);

  const handleInputChange = (event) => {
    dispatch({
      type: "change_input",
      data: { name: event.target.name, value: event.target.value },
    });
  };

  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((t) => {
      dispatch({ type: "add_tag", data: t });
    });
  };
  console.log(state);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleInputChange}
        />
        <p>category</p>
        <select name="category" onChange={handleInputChange}>
          <option value="bag">Bag</option>
          <option value="shoes">Shoes</option>
          <option value="dress">Dress</option>
        </select>
        <p>tag</p>
        <textarea placeholder="tags" ref={tagRef}></textarea>
        <br />
        <button type="button" onClick={handleTags}>
          Select tag
        </button>
        <br />
        <div>
          {state.tags.map((tag) => {
            return (
              <button
                key={tag}
                onClick={() => dispatch({ type: "remove_tag", data: tag })}
              >
                {tag}
              </button>
            );
          })}
        </div>
        <div>
          <button type="button" onClick={() => dispatch({ type: "increase" })}>
            +
          </button>
          <div> {state.quantity}</div>
          <button type="button" onClick={() => dispatch({ type: "decrease" })}>
            -
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
