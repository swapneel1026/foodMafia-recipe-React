import React from "react";
import "./LowerSection.css";
import NavbarSearchComponent from "./NavbarSearchComponent";

const LowerSection = () => {
  return (
    <div className="section-lower">
      <div className="centerSection">
        <div className="centerSection-Searchbar">
          <NavbarSearchComponent />
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
