// importing data management pages services subcomponents
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import DataMagGridSection from "@/app/components/subpagecomponenets/datamag/datamaggridsection";
import SecondSectionRightSided from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontyperightsided";
import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import SubPagesAdvantegesSection from "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection";
import SubPagesGetStartedSection from "@/app/components/subpagecomponenets/subpagesgetstartedsection/subpagesgetstartedsection";

// importing data management service page data
import textdata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagtextdata.json";
import rightstripcarddata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagrightstripdata.json";
import DatamagThirdSectionTextData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectiontextdata.json";
import DatamagThirdSectionLeftCardData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectionleftcarddata.json";
import DatamagThirdSectionRightCardData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectionrightcarddata.json";
import DataMangIndustriesectdata from "@/app/data/subpagedata/datamanagementdata/industriesdatamang.json";
import DataMangadvtext from "@/app/data/subpagedata/datamanagementdata/datamangadvantegessectiondata/datamangadvtextdata.json";
import DataMangadvleftdata from "@/app/data/subpagedata/datamanagementdata/datamangadvantegessectiondata/datamanglefsideadvdata.json";
import DataMangadvrightdata from "@/app/data/subpagedata/datamanagementdata/datamangadvantegessectiondata/datamangrightsideadvdata.json";
import DataManggetstarted from "@/app/data/subpagedata/datamanagementdata/datamanggetstrated.json";

// importing utility menthods
import { getHeroData } from "@/app/utils/gethreodata";

export default function DataManagement() {
  const data = getHeroData("data-management");
  return (
    <>
      <SubPageHeroSection data={data} />
      <DataMagGridSection />
      <SecondSectionRightSided
        textdata={textdata}
        rightstripcarddata={rightstripcarddata}
      />
      <ThirdProcessSection
        textdata={DatamagThirdSectionTextData}
        leftstripcarddata={DatamagThirdSectionLeftCardData}
        rightstripcarddata={DatamagThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={DataMangIndustriesectdata.heading}
        text={DataMangIndustriesectdata.text}
      />
      <SubPagesAdvantegesSection
        advtitle={DataMangadvtext.advtitle}
        advdesc={DataMangadvtext.advdesc}
        leftdata={DataMangadvleftdata}
        rightdata={DataMangadvrightdata}
      />
      <SubPagesGetStartedSection
        headinggetstarted={DataManggetstarted.heading}
        descriptiongetstarted={DataManggetstarted.text}
      />
    </>
  );
}
