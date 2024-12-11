export default function CardThree({
  reviewerthree,
  designationthree,
  descriptionthree,
}) {
  return (
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
  );
}
