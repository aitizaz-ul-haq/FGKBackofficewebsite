import ColumnCards from "./columncards";

export const RightCardReviewSection = ({
  reviewerone,
  designationone,
  descriptionone,
  reviewertwo,
  designationtwo,
  descriptiontwo,
  reviewerthree,
  designationthree,
  descriptionthree,
}) => {
  return (
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
  );
};
