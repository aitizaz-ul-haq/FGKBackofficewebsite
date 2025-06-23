import "./homepageclientscard.css";
import ClientCardReviewText from "./homepageclientcardmicrocomps/clientcardreviewtext";
import ClientCardDesignation from "./homepageclientcardmicrocomps/clientcarddesignation";
import ClientCardName from "./homepageclientcardmicrocomps/clietncardname";

export default function HomepageClientsCard({ name, designation, reviewtext }) {
  return (
    <div className="homepage-client-card-container">
      <ClientCardName name={name} />
      <ClientCardDesignation designation={designation} />
      <ClientCardReviewText reviewtext={reviewtext} />
    </div>
  );
}
