import "./styles/servicesreviewssection.css";

export default function ServicesReviewsSection({
  reviewerone,
  designationone,
  descriptionone,
  reviewertwo,
  designationtwo,
  descriptiontwo,
  reviewerthree,
  designationthree,
  descriptionthree,
}) {
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
                {reviewerone}
              </div>
              <div className="cardone-designation-name font-inter text-light">
                {designationone}
              </div>
              <div className="cardone-review-statement font-inter text-light">
                {descriptionone}
              </div>
            </div>
            <div className="review-cardtwo">
              <div className="cardtwo-review-name font-inter text-light">
                {reviewertwo}
              </div>
              <div className="cardtwo-designation-name font-inter text-light">
                {designationtwo}
              </div>
              <div className="cardtwo-review-statement font-inter text-light">
                {descriptiontwo}
              </div>
            </div>
            <div className="review-cardthree">
              <div className="cardthree-review-name font-inter text-light">
                {reviewerthree}
              </div>
              <div className="cardthree-designation-name font-inter text-light">
                {designationthree}
              </div>
              <div className="cardthree-review-statement font-inter text-light">
                {descriptionthree}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
