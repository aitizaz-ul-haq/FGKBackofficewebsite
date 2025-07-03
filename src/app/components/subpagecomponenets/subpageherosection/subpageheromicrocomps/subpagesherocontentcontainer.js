import SubPagesHeroTitleSection from "./subpagesherotitlesection";
import SubPagesHeroParaSection from "./subpagesheroparasection";
import SubPagesHeroButtonSection from "./subpagesherobuttonsection";

export default function SubPagesHeroContentContainer({ title, paragraph, buttonhint }) {
  return (
    <div className="subpagehero-content">
      <SubPagesHeroTitleSection title={title} />
      <SubPagesHeroParaSection paragraph={paragraph} />
      <SubPagesHeroButtonSection buttonhint={buttonhint}/>
    </div>
  );
}
