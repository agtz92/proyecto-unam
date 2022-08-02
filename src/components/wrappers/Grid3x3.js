import React from "react";
import "../../webflow_styles/wrappers/grid3x3.css"
const Grid3x3 = (props) => {
  return (
    <div className="grid-container w-container">
      <div className="w-layout-grid grid">
          {props.products}
      </div>
    </div>
  );
};

export default Grid3x3;
