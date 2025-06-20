import "./subpageherosection.css";
import SubPagesHeroContentContainer from "./subpageheromicrocomps/subpagesherocontentcontainer";

export default function SubPageHeroSection({ data }) {
  return (
    <div
      className="subpagehero-section"
      style={{
        "--background-desktop": `url(${data.desktopImage})`,
        "--background-mobile": `url(${data.mobileImage})`,
      }}
    >
      <SubPagesHeroContentContainer
        title={data.title}
        paragraph={data.paragraph}
      />
    </div>
  );
}
