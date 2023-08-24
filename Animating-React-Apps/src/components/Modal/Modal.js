import React from "react";
import Transition from "react-transition-group/Transition";

import "./Modal.css";

const modal = (props) => {
  return (
    <Transition mountOnEnter unmountOnExit in={props.show} timeout={300}>
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
