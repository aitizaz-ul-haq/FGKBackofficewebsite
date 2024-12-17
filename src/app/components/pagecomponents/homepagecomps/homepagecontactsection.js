import "./styles/homepagecontactsection.css";
import HomePageContactLeftSection from "./subcomps/homepagecontactleftsection";
import HomepageContactRightSection from "./subcomps/homepagecontactrightsection";

export default function HomepageContactSection() {
  return (
    <>
      <div className="homepage-contact-container">
        <HomePageContactLeftSection />
        <HomepageContactRightSection />
      </div>
    </>
  );
}
