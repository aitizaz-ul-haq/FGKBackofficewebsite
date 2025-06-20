export default function RightIntroSection({
  topdescriptionparaone,
  topdescriptionparatwo,
  topdescriptionparathree,
}) {
  return (
    <div className="right-intro-section">
      <h2 className="right-heading-section font-inter text-light">About Us</h2>
      <p className="right-description-section font-inter text-light">
        {topdescriptionparaone}
      </p>
      <p className="right-description-section font-inter text-light">
        {topdescriptionparatwo}
      </p>
      <p className="right-description-section font-inter text-light">
        {topdescriptionparathree}
      </p>
    </div>
  );
}
