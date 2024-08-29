import React, { useState } from "react";
import "./DynamicStyling.css";

const DynamicStyling = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  function changeStatus() {
    setIsButtonActive(!isButtonActive);
  }
  return (
    <div>
      <button
        onClick={changeStatus}
        className={isButtonActive ? "active" : "not-active"}
      >
        {isButtonActive ? "Active" : "Not Active"}
      </button>
    </div>
  );
};

export default DynamicStyling;
