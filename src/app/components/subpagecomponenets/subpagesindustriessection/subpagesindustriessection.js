import "./subpagesindustriessection.css";

export default function SubPagesIndustriesSection({ heading, text }) {
  return (
    <>
      <div className="subpagesindustries-container">
        <div className="subpagesindustries-text-container">
          <h3 className="subpagesindustries-heading font-inter">{heading}</h3>
          <p className="subpagesindustries-text font-inter">{text}</p>
        </div>
      </div>
    </>
  );
}
