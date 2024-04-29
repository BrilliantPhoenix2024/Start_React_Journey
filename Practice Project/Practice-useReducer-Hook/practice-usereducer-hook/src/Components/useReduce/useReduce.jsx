import React from "react";

export const intialState = {
  loading: false,
  fact: "",
  error: false,
};

// fetch_start => loading : true
// fetch_success => loading : false
//               => res.data.fact
// fetch_error => loading : false
//             => error : true

export const useReduce = (state, action) => {
  // {action.type: data}
  switch (action.type) {
    case "fetch_start":
      return { loading: true, fact: "", error: false };
    case "fetch_success":
      return { loading: false, fact: action.data, error: false };
    case "fetch_error":
      return { loading: false, fact: "", error: true };
    default:
      return state;
  }

  //   if (action.type === "fetch_start") {
  //     return { loading: true, fact: "", error: false };
  //   }
  //   if (action.type === "fetch_success") {
  //     return { loading: false, fact: action.data, error: false };
  //   }

  //   if (action.type === "fetch_error") {
  //     return { loading: false, fact: "", error: true };
  //   }
};
