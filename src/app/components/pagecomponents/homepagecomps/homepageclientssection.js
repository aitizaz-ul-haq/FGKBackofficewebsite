import "./styles/homepageclientssection.css";
import HomepageClientsSectionTitle from "./subcomps/homepageclientssectiontitle";
import HomepageClientsReviewContainer from "./subcomps/homepageclientsreviewcontainer";

export default function HomepageClientsSection() {
  return (
    <div className="homepage-clients-seciton">
      <HomepageClientsSectionTitle />
      <HomepageClientsReviewContainer />
    </div>
  );
}
