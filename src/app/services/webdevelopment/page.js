import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import WebDevGridSection from "@/app/components/subpagecomponenets/webdev/webdevgridsection";
import SecondSectionTypeTopAndBottom from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypetopandbottom";
import webdevtextdata from "@/app/data/subpagedata/webdevdata/secondsectionwebdevelopment/webdevtextdata.json";
import webdevleftstripdata from "@/app/data/subpagedata/webdevdata/secondsectionwebdevelopment/webdevleftstripdata.json";
import webdevrightstripdata from "@/app/data/subpagedata/webdevdata/secondsectionwebdevelopment/webdevrightstripdata.json";

import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import WebDevThirdSectionTextData from "@/app/data/subpagedata/webdevdata/thirdsectionwebdevelopment/webdevthirdsectiontextdata.json";
import WebDevThirdSectionLeftCardData from "@/app/data/subpagedata/webdevdata/thirdsectionwebdevelopment/webdevthirdsectionleftcarddata.json";
import WebDevThirdSectionRightCardData from "@/app/data/subpagedata/webdevdata/thirdsectionwebdevelopment/webdevthirdsectionrightcarddata.json";

export default function WebDevelopment() {
  const data = getHeroData("web-development");
  return (
    <>
      <SubPageHeroSection data={data} />
      <WebDevGridSection />
      <SecondSectionTypeTopAndBottom
        textdata={webdevtextdata}
        leftstripcarddata={webdevleftstripdata}
        rightstripcarddata={webdevrightstripdata}
      />
      <ThirdProcessSection
        textdata={WebDevThirdSectionTextData}
        leftstripcarddata={WebDevThirdSectionLeftCardData}
        rightstripcarddata={WebDevThirdSectionRightCardData}
      />
    </>
  );
}
