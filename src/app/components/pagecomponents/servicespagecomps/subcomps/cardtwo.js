export default function CardTwo({
  reviewertwo,
  designationtwo,
  descriptiontwo,
}) {
  return (
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
  );
}
