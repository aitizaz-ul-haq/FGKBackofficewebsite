"use client";

import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }

    // Optionally reset the form
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* First Row: First Name & Last Name */}
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Second Row: Company Name */}
        <div className="form-row">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        {/* Third Row: Phone & Email */}
        <div className="form-row">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Fourth Row: Message Box */}
        <div className="form-row">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-row">
          <button type="submit">Submit</button>
        </div>
      </form>

      <style jsx>{`
        .form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          // height: 100vh;
          padding: 20px;
          box-sizing: border-box;
        }

        h2 {
          margin-bottom: 20px;
          font-family: Inter, sans-serif;
          font-weight: 100;
        }

        form {
          width: 100%;
          max-width: 600px;
          display: flex;
          flex-direction: column;
        }

        .form-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 15px;
        }

        input,
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

        textarea {
          flex: 1 1 100%;
          resize: none;
        }

        button {
          flex: 1 1 100%;
          background-color: #59c3c3;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 18px;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #449f9f;
        }
      `}</style>
    </div>
  );
};

export default ContactUsForm;
