import "./styles/servicesreviewssection.css";
import ColumnCards from "./subcomps/columncards";

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
          <ColumnCards
            reviewerone={reviewerone}
            designationone={designationone}
            descriptionone={descriptionone}
            reviewertwo={reviewertwo}
            designationtwo={designationtwo}
            descriptiontwo={descriptiontwo}
            reviewerthree={reviewerthree}
            designationthree={designationthree}
            descriptionthree={descriptionthree}
          />
        </div>
      </div>
    </>
  );
}
