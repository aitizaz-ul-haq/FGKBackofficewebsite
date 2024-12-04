export default function MiddleSection({
  middlesectionparaone,
  middlesectionparatwo,
}) {
  return (
    <div className="aboutpagecontent-middle-section">
      <p className="first-para font-inter text-light">{middlesectionparaone}</p>
      <p className="second-para font-inter text-light">
        {middlesectionparatwo}
      </p>
    </div>
  );
}
