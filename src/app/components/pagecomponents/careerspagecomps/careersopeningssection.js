"use client";

import React, { useState } from "react";
import "./styles/careersopeningssection.css";
import openingsdata from "./data/careersopeningsdata.json";

export default function CareersOpeningsSection() {
  const [selectedOpening, setSelectedOpening] = useState(null);

  const openModal = (designation) => {
    const details = openingsdata.find(
      (item) => item.designation === designation
    );
    setSelectedOpening(details);
  };

  const closeModal = () => {
    setSelectedOpening(null);
  };

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
            <button
              className="position-strip-button font-inter"
              onClick={() => openModal(opening.designation)}
            >
              Details
            </button>
          </div>
        </div>
      ))}

      {selectedOpening && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button className="modal-close-button" onClick={closeModal}>
              &times;
            </button>
            <h3 className="modal-title font-roboto-sarif">
              {selectedOpening.designation}
            </h3>
            <p className="modal-description font-inter">
              {selectedOpening.description}
            </p>

            {selectedOpening.oversight && (
              <div>
                <h3 className="modal-title font-roboto-sarif">Oversight</h3>
                <p className="modal-description font-inter">
                  {selectedOpening.oversight}
                </p>
              </div>
            )}

            {selectedOpening.responsibilities && (
              <div>
                <h3 className="modal-title font-roboto-sarif">
                  Responsibilities
                </h3>
                <ul className="modal-list font-inter">
                  {selectedOpening.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedOpening.systems && (
              <div>
                <h3 className="modal-title font-roboto-sarif">Systems</h3>
                <ul className="modal-list font-inter">
                  {selectedOpening.systems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedOpening.requiredSkillset && (
              <div>
                <h3 className="modal-title font-roboto-sarif">
                  Required Skillset
                </h3>
                <ul className="modal-list font-inter">
                  {selectedOpening.requiredSkillset.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
