import HomepageClientsCard from "@/app/components/layoutcomponents/cards/homepageclientscard/homepageclientscard";
import reviewdata from "../data/homepageclientsreviewdata.json";

export default function HomepageClientsReviewContainer() {
  return (
    <div className="homepage-clients-section-container">
      {reviewdata.map((revdata, index) => (
        <HomepageClientsCard
          key={index}
          name={revdata.Reviewrname}
          designation={revdata.Designation}
          reviewtext={revdata.Reviewtext}
        />
      ))}
    </div>
  );
}
