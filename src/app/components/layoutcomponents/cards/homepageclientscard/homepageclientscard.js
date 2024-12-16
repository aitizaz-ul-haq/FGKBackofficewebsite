import "./homepageclientscard.css";

export default function HomepageClientsCard({ name, designation, reviewtext }) {
  return (
    <div className="homepage-client-card-container">
      <div className="homepage-client-name-heading font-inter">{name}</div>
      <div className="homepage-client-designation font-inter">
        {designation}
      </div>
      <div className="homepage-clients-review-section font-inter">
        {reviewtext}
      </div>
    </div>
  );
}
