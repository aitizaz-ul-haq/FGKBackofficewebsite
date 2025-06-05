import "./subpagesgetstartedsection.css";

export default function SubPagesGetStartedSection({
  headinggetstarted,
  descriptiongetstarted
}) {
  return (
    <div className="subpagesgetstartedsection-container">
      <div className="subpagesgetstartedsection-text-container">
        <div className="subpagesgetstartedsection-heading font-inter">
          {headinggetstarted}
        </div>
        <div className="subpagesgetstartedsection-description font-inter">
          {descriptiongetstarted}
        </div>
      </div>
      <button className="subpagesgetstartedsection-button">
        Hire A Professional
      </button>
    </div>
  );
}
