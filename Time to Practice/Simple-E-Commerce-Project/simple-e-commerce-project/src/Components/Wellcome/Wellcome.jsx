import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const WellcomeComponent = () => {
  const [showWellcome, setShowWellcome] = useState();
  useEffect(() => {
    const data = localStorage.getItem("show_app_intro");
    setShowWellcome(JSON.parse(data) ?? true);
  }, []);

  const onHideWellcome = () => {
    setShowWellcome(false);
    localStorage.setItem("show_app_intro", JSON.stringify(false));
  };

  return (
    <React.Fragment>
      {showWellcome && (
        <div className="container">
          <div className="bg-primary text-white my-3">
            <FontAwesomeIcon
              icon={faClose}
              style={{ float: "right", margin: "5px" }}
              onClick={onHideWellcome}
            />
            <div className="p-4">Wellcome</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default WellcomeComponent;
