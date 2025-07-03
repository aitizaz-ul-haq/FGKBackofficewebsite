import "./styles/mainpageherosection.css";
import herodata from "./data/herosection.json";
import MainPageHeroHeading from "./mainpageherosectionmicrocomps/mainpageheroheading";
import MainPageHeroPara from "./mainpageherosectionmicrocomps/mainpageheropara";
import MainPageHeroButton from "./mainpageherosectionmicrocomps/mainpageherobutton";

export default function MainPageHeroSection({ title, paragraph }) {
  return (
    <div className="main-page-hero-section">
      <div className="main-page-hero-content">
        <MainPageHeroHeading heading={herodata.title} />
        <MainPageHeroPara paragraph={herodata.paragraph} />
        <MainPageHeroButton buttonhint={herodata.buttonhint}/>
      </div>
    </div>
  );
}
