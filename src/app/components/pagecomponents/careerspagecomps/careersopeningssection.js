import "./styles/careersopeningssection.css";

export default function CareersOpeningsSection() {
  return (
    <>
      <div className="openings-container">
        <h2 className="openings-heading">Openings</h2>
        <div className="position-strip">
          <h3 className="position-heading">Position Designation</h3>
          <p className="position-description">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley
          </p>
          <button className="position-strip-button">Details</button>
        </div>
      </div>
    </>
  );
}
