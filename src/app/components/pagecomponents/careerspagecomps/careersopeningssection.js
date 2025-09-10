"use client";

import React, { useState } from "react";
import "./styles/careersopeningssection.css";
import openingsdata from "./data/careersopeningsdata.json";
import CareersOpeningsDesignation from "./careersopeningssectionmicrocomps/careersopeningsdesignation";
import CareersOpeningsDescription from "./careersopeningssectionmicrocomps/careersopeningsdescription";
import CareersOpeningsHeading from "./careersopeningssectionmicrocomps/careersopeningsheading";
import SelectedOpeningsDesignation from "./selectedopeningsmicrocomps/selectedopeningsdesignation";

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
      <CareersOpeningsHeading />
      {openingsdata.map((opening, index) => (
        <div key={index} className="position-strip">
          <div className="position-description-details-button">
            <CareersOpeningsDesignation designation={opening.designation} />
            {/* Optional description preview (first section or summary) */}
            {opening.sections[0]?.content && (
              <CareersOpeningsDescription
                description={opening.sections[0].content.substring(0, 180) + "..."}
              />
            )}
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

            <SelectedOpeningsDesignation
              designation={selectedOpening.designation}
            />

            {/* Loop through sections dynamically */}
            {selectedOpening.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="modal-title">{section.heading}</h3>
                {section.content && (
                  <p className="modal-description">{section.content}</p>
                )}
                {section.list && (
                  <ul className="modal-list">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
