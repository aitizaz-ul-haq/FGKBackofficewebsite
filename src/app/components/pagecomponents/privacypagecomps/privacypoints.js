"use client";
import React from "react";
import "./styles/privacypoints.css";
export default function PrivacyPoints({privacydata}) {
  return (
    <div className="privacy-points-container">
      {privacydata.map((section, index) => (
        <div key={index} className="privacy-section">
          <h3 className="section-heading font-inter text-light">{section.heading}</h3>
          <p className="section-paragraph font-inter text-light">{section.content}</p>
        </div>
      ))}
    </div>
  );
}
