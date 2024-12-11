export default function CardOne({
  reviewerone,
  designationone,
  descriptionone,
}) {
  return (
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
  );
}
