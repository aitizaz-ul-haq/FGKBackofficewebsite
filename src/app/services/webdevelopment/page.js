// importing web development services page subcomponenets
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import WebDevGridSection from "@/app/components/subpagecomponenets/webdev/webdevgridsection";
import SecondSectionTypeTopAndBottom from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypetopandbottom";
import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import SubPagesAdvantegesSection from "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection";
import SubPagesGetStartedSection from "@/app/components/subpagecomponenets/subpagesgetstartedsection/subpagesgetstartedsection";

// importing json data for web developmnet services page components
import webdevtextdata from "@/app/data/subpagedata/webdevdata/secondsectionwebdevelopment/webdevtextdata.json";
import webdevleftstripdata from "@/app/data/subpagedata/webdevdata/secondsectionwebdevelopment/webdevleftstripdata.json";
import webdevrightstripdata from "@/app/data/subpagedata/webdevdata/secondsectionwebdevelopment/webdevrightstripdata.json";
import WebDevThirdSectionTextData from "@/app/data/subpagedata/webdevdata/thirdsectionwebdevelopment/webdevthirdsectiontextdata.json";
import WebDevThirdSectionLeftCardData from "@/app/data/subpagedata/webdevdata/thirdsectionwebdevelopment/webdevthirdsectionleftcarddata.json";
import WebDevThirdSectionRightCardData from "@/app/data/subpagedata/webdevdata/thirdsectionwebdevelopment/webdevthirdsectionrightcarddata.json";
import WebdevIndustriesData from "@/app/data/subpagedata/webdevdata/industriesectionwebdev/industrieswebdev.json";
import webdevadv from "@/app/data/subpagedata/webdevdata/webdevadvantegessectiondata/webdevadvtextdata.json";
import leftadvdata from "@/app/data/subpagedata/webdevdata/webdevadvantegessectiondata/webdevlefsideadvdata.json";
import rightadvdata from "@/app/data/subpagedata/webdevdata/webdevadvantegessectiondata/webdevrightsideadvdata.json";
import Webdevgetstarteddata from "@/app/data/subpagedata/webdevdata/webdevgettingstarted.json";

// importing utility methods
import { getHeroData } from "@/app/utils/gethreodata";

// web development services page main component
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
      <SubPagesIndustriesSection
        heading={WebdevIndustriesData.heading}
        text={WebdevIndustriesData.text}
      />
      <SubPagesAdvantegesSection
        advtitle={webdevadv.advtitle}
        advdesc={webdevadv.advdesc}
        leftdata={leftadvdata}
        rightdata={rightadvdata}
      />
      <SubPagesGetStartedSection
        headinggetstarted={Webdevgetstarteddata.heading}
        descriptiongetstarted={Webdevgetstarteddata.text}
      />
    </>
  );
}
