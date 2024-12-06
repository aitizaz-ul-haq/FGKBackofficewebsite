import React from "react";
import "./styles/careersopeningssection.css";
import openingsdata from "./data/careersopeningsdata.json";

export default function CareersOpeningsSection() {
  return (
    <div className="openings-container">
      <h2 className="openings-heading font-roboto-sarif text-light">
        Openings
      </h2>
      {openingsdata.map((opening, index) => (
        <div key={index} className="position-strip">
          <div className="position-description-details-button">
            <h3 className="position-heading font-roboto-sarif">
              {opening.designation}
            </h3>
            <p className="position-description font-inter">
              {opening.description}
            </p>
          </div>
          <div className="careers-details-button-container">
            <button className="position-strip-button font-inter">
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
