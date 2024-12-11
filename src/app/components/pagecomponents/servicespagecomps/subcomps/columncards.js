import CardOne from "./cardone";
import CardTwo from "./cardtwo";
import CardThree from "./cardthree";

export default function ColumnCards({
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
    <div className="review-column-cards">
      <CardOne
        reviewerone={reviewerone}
        designationone={designationone}
        descriptionone={descriptionone}
      />

      <CardTwo
        reviewertwo={reviewertwo}
        designationtwo={designationtwo}
        descriptiontwo={descriptiontwo}
      />

      <CardThree
        reviewerthree={reviewerthree}
        designationthree={designationthree}
        descriptionthree={descriptionthree}
      />
    </div>
  );
}
