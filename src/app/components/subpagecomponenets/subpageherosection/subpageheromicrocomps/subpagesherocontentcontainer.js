import SubPagesHeroTitleSection from "./subpagesherotitlesection";
import SubPagesHeroParaSection from "./subpagesheroparasection";
import SubPagesHeroButtonSection from "./subpagesherobuttonsection";

export default function SubPagesHeroContentContainer({ title, paragraph }) {
  return (
    <div className="subpagehero-content">
      <SubPagesHeroTitleSection title={title} />
      <SubPagesHeroParaSection paragraph={paragraph} />
      <SubPagesHeroButtonSection />
    </div>
  );
}
