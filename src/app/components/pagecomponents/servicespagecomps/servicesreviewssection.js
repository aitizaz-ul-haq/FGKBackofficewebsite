import "./styles/servicesreviewssection.css";
import { LeftHeadingReviewSection } from "./subcomps/leftheadingreviewsection";
import { RightCardReviewSection } from "./subcomps/rightcardreviewsection";

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
    <div className="reviewssection-container">
      <LeftHeadingReviewSection />
      <RightCardReviewSection
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
}
