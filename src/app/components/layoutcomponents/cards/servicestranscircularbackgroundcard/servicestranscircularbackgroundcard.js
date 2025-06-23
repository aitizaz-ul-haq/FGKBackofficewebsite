import "./servicestranscircularbackgroundcard.css";
import NumericTitle from "./servicestranscircularmicrocomps/numerictitle";
import AlphabaticTitle from "./servicestranscircularmicrocomps/alphabatictitle";

export default function ServicesTransCircularBackgroundCard({
  numericitle,
  alphabaticheading,
}) {
  return (
    <>
      <div className="circularcard-container">
        <NumericTitle numericitle={numericitle} />
        <AlphabaticTitle alphabaticheading={alphabaticheading} />
      </div>
    </>
  );
}
