import "./styles/servicesreviewssection.css";

export default function ServicesReviewsSection() {
  return (
    <>
      <div className="reviewssection-container">
        <div className="left-heading-review-section">
          <div className="review-heading font-inter text-light">
            What Our Clients Say About<br></br> Our Services
          </div>
        </div>
        <div className="right-cards-review-section">
          <div className="review-column-cards">
            <div className="review-cardone">
              <div className="cardone-review-name font-inter text-light">
                Reviewer
              </div>
              <div className="cardone-designation-name font-inter text-light">
                Designation & Company Name
              </div>
              <div className="cardone-review-statement font-inter text-light">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley{" "}
              </div>
            </div>
            <div className="review-cardtwo">
              <div className="cardtwo-review-name font-inter text-light">
                Reviewer
              </div>
              <div className="cardtwo-designation-name font-inter text-light">
                Designation & Company Name
              </div>
              <div className="cardtwo-review-statement font-inter text-light">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley{" "}
              </div>
            </div>
            <div className="review-cardthree">
              <div className="cardthree-review-name font-inter text-light">
                Reviewer
              </div>
              <div className="cardthree-designation-name font-inter text-light">
                Designation & Company Name
              </div>
              <div className="cardthree-review-statement font-inter text-light">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
