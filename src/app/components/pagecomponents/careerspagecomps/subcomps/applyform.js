"use client";

import React, { useState, useRef } from "react";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    address: "",
    message: "",
    resume: null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return; // 🚫 prevent duplicate submissions
    setSubmitting(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) data.append(key, value);
    });

    try {
      const response = await fetch("/api/apply-email", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setDialogMessage("✅ Application submitted successfully!");
        setShowDialog(true);

        // Reset form fields
        e.target.reset();
        if (fileInputRef.current) fileInputRef.current.value = "";
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          position: "",
          address: "",
          message: "",
          resume: null,
        });
      } else {
        setDialogMessage("❌ Application submission failed. Please try again.");
        setShowDialog(true);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      setDialogMessage("⚠️ An error occurred. Please try again later.");
      setShowDialog(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Apply Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="position">Position Applied For</label>
          <select
            name="position"
            id="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Position
            </option>
            <option value="hr-admin-executive">HR & Admin Executive</option>
            <option value="trainee-analyst-financial-data-and-operations">
              Trainee Analyst Financial Data & Operations
            </option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            name="resume"
            id="resume"
            accept=".pdf,.doc,.docx"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="file-upload"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-row">
          <button type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Submit Application"}
          </button>
        </div>
      </form>

      {/* ✅ Dialog Modal */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <p>{dialogMessage}</p>
            <button onClick={() => setShowDialog(false)}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
          background-color: rgb(89, 195, 195, 7%);
        }

        .file-upload {
          flex: 1 1 100%;
          width: 100%; /* or a custom width like 220px */
          padding: 8px;
          background-color: white;
        }

        h2 {
          margin-bottom: 20px;
          font-family: Inter, sans-serif;
          font-weight: 100;
        }

        form {
          width: 100%;
          max-width: 240px;
          display: flex;
          flex-direction: column;
        }

        .form-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 15px;
        }

        label {
          flex: 1 1 100%;
          font-size: 14px;
          margin-bottom: 5px;
          font-family: inter, sans-serif;
          font-weight: 200;
        }

        input,
        select,
        textarea,
        button {
          flex: 1;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-sizing: border-box;
        }

        input {
          flex: 1 1 calc(50% - 10px);
        }

        select {
          flex: 1 1 100%;
        }

        textarea {
          flex: 1 1 100%;
          resize: none;
        }

        button {
          flex: 1 1 100%;
          background-color: var(--recomended-button-background-color);
          color: var(--recomended-button-text-color);
          border: none;
          cursor: pointer;
          font-size: 18px;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #449f9f;
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        button:hover:enabled {
          background-color: #449f9f; /* keep hover only when enabled */
        }

        /* Dialog overlay + box */
        .dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .dialog-box {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          max-width: 300px;
        }
        .dialog-box button {
          margin-top: 15px;
          padding: 8px 16px;
          border: none;
          border-radius: 5px;
          background-color: var(--recomended-button-background-color);
          color: var(--recomended-button-text-color);
          cursor: pointer;
        }

        /* Medium laptops (>= 1024px) */
        @media (min-width: 1024px) {
          .form-container {
            width: 500px;
          }
          form {
            max-width: 435px;
          }
        }
      `}</style>
    </div>
  );
};

export default ApplyForm;
