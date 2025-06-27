import "./mainherosection.css";
import HeroTitleComp from "./mainherosectionmicrocomps/herotitlecomp";
import HeroParaComp from "./mainherosectionmicrocomps/heroparacomps";
import HeroButtonComp from "./mainherosectionmicrocomps/herobuttoncomp";
import HeroForwardImgComp from "./mainherosectionmicrocomps/heroforwardimgcomp";
// components/HeroSection.js
export default function MainHeroSection({
  title,
  paragraph,
  mobileImage,
  desktopImage,
}) {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url('/images/services_1920px_hero_background.webp')`,
        "--mobile-image": `url(${mobileImage})`,
        "--desktop-image": `url(${desktopImage})`,
      }}
    >
      <div className="hero-content">
        <HeroTitleComp title={title} />
        <HeroParaComp paragraph={paragraph} />
        <HeroButtonComp />
        <HeroForwardImgComp />
      </div>
    </div>
  );
}
