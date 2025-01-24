// importing human resources service page subcomponents
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import HumResGridSection from "@/app/components/subpagecomponenets/humres/humresgridsection";
import SecondSectionRightSided from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontyperightsided";
import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import SubPagesAdvantegesSection from "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection";
import SubPagesGetStartedSection from "@/app/components/subpagecomponenets/subpagesgetstartedsection/subpagesgetstartedsection";

// importing human resources page data
import humrestextdata from "@/app/data/subpagedata/humresdata/secondsectionhumanresourcesdata/humrestextdata.json";
import humresrightsidestripdata from "@/app/data/subpagedata/humresdata/secondsectionhumanresourcesdata/humresrightstripdata.json";
import HumresThirdSectionTextData from "@/app/data/subpagedata/humresdata/thirdsectionhumres/humresthirdsectiontextdata.json";
import HumresThirdSectionLeftCardData from "@/app/data/subpagedata/humresdata/thirdsectionhumres/humresthirdsectionleftcarddata.json";
import HumresThirdSectionRightCardData from "@/app/data/subpagedata/humresdata/thirdsectionhumres/humresthirdsectionrightcarddata.json";
import HumresIndustriesData from "@/app/data/subpagedata/humresdata/industriesectionhumresdata/industrieshumresdata.json";
import assadvtextdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/accadvtextdata.json";
import leftadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/lefsideadvdata.json";
import rightadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/rightsideadvdata.json";

// importing utility method
import { getHeroData } from "@/app/utils/gethreodata";

export default function HumanResources() {
  const data = getHeroData("human-resources");
  return (
    <>
      <SubPageHeroSection data={data} />
      <HumResGridSection />
      <SecondSectionRightSided
        textdata={humrestextdata}
        rightstripcarddata={humresrightsidestripdata}
      />
      <ThirdProcessSection
        textdata={HumresThirdSectionTextData}
        leftstripcarddata={HumresThirdSectionLeftCardData}
        rightstripcarddata={HumresThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={HumresIndustriesData.heading}
        text={HumresIndustriesData.text}
      />
      <SubPagesAdvantegesSection
        advtitle={assadvtextdata.advtitle}
        advdesc={assadvtextdata.advdesc}
        leftdata={leftadvdata}
        rightdata={rightadvdata}
      />
      <SubPagesGetStartedSection />
    </>
  );
}
