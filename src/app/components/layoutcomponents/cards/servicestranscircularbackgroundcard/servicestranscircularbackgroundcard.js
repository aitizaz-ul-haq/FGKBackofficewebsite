import "./servicestranscircularbackgroundcard.css";

export default function ServicesTransCircularBackgroundCard({
  numericitle,
  alphabaticheading,
}) {
  return (
    <>
      <div className="circularcard-container">
        <h2 className="circularcard-numeric-heading font-inter text-light">
          {numericitle}
        </h2>
        <h3 className="circularcard-alphabatic-heading font-roboto-serif text-light">
          {alphabaticheading}
        </h3>
      </div>
    </>
  );
}
