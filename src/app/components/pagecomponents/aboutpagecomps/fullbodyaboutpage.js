import "./styles/fullbodyaboutpage.css";

export default function FullBodyAboutPage() {
  return (
    <div className="aboutpagecontent-container">
      {/* upper section */}
      <div className="aboutpagecontaent-logo-introsection">
        <div className="left-logo-section">logo</div>
        <div className="right-intro-section">
          <h2 className="right-heading-section">About Us</h2>
          <p className="right-description-section">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a
          </p>
        </div>
      </div>

      {/* middle section */}
      <div className="aboutpagecontent-middle-section">
        <p className="first-para">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
        </p>
        <p className="second-para">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
        </p>
      </div>

      {/* last section */}
      <div className="aboutpagecontent-last-section">
        <p className="last-para">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
        </p>
      </div>

      {/* image grid */}
      <div className="aboutpage-grid-container"></div>
    </div>
  );
}
