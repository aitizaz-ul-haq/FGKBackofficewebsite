import "./styles/progmaggridsection.css";
import SubPagesGridCardSection from "../subpagesgridcardsection.js/subpagesgridcardsection";

export default function ProgMagGridSection() {
  return (
    <div className="progmag-grid-container">
      <div className="progmag-text-container">
        <div className="progmag-grid-text-heading font-inter">
          Project Management Services
        </div>
        <div className="progmag-grid-text-description font-inter">
          Effective project management is the cornerstone of any successful
          business operation. Our comprehensive Project Management Services
          ensure that your projects are delivered on time, within budget, and
          exceed quality expectations. We bring years of expertise and a proven
          track record of successful project completions across various
          industries.Effective project management is the cornerstone of any
          successful business operation. Our comprehensive Project Management
          Services ensure that your projects are delivered on time, within
          budget, and exceed quality expectations. We bring years of expertise
          and a proven track record of successful project completions across
          various industries.
        </div>
        <button className="progmag-grid-text-button font-inter">
          Hire A Professional
        </button>
      </div>

      <div className="progmag-grid-section-container">
        <SubPagesGridCardSection />
      </div>
    </div>
  );
}
