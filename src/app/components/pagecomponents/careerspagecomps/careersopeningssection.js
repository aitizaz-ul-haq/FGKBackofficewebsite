"use client";

import React, { useState } from "react";
import "./styles/careersopeningssection.css";
import openingsdata from "./data/careersopeningsdata.json";
import CareersOpeningsDesignation from "./careersopeningssectionmicrocomps/careersopeningsdesignation";
import CareersOpeningsDescription from "./careersopeningssectionmicrocomps/careersopeningsdescription";
import CareersOpeningsHeading from "./careersopeningssectionmicrocomps/careersopeningsheading";
import SelectedOpeningsDesignation from "./selectedopeningsmicrocomps/selectedopeningsdesignation";
import SelectedOpeningsDescription from "./selectedopeningsmicrocomps/selectedopeningsdescription";
import SelectedOpeningsOverSightDescription from "./selectedopeningsmicrocomps/selectedopeningsoversightdescription";
import SelectedOpeningsOversightHeading from "./selectedopeningsmicrocomps/selectedopeningsoversightheading";
import SelectedResponsibilitiesHeading from "./selectedopeningsmicrocomps/selectedresponsibilitiesheading";
import SelectedOpeningsSystemHeading from "./selectedopeningsmicrocomps/selectedopeningssystems";
import SelectedOpeningsReqSkilledHeading from "./selectedopeningsmicrocomps/selectedopeningsreqskilledheading";

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
            <CareersOpeningsDescription description={opening.description} />
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
            <SelectedOpeningsDescription
              description={selectedOpening.description}
            />

            {selectedOpening.oversight && (
              <div>
                <SelectedOpeningsOversightHeading />
                <SelectedOpeningsOverSightDescription
                  description={selectedOpening.oversight}
                />
              </div>
            )}

            {selectedOpening.responsibilities && (
              <div>
                <SelectedResponsibilitiesHeading />
                <ul className="modal-list font-inter">
                  {selectedOpening.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedOpening.systems && (
              <div>
                <SelectedOpeningsSystemHeading />
                <ul className="modal-list font-inter">
                  {selectedOpening.systems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedOpening.requiredSkillset && (
              <div>
                <SelectedOpeningsReqSkilledHeading />
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
