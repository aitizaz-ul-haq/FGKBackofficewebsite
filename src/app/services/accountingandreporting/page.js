// importing accounting and reporting service page subcomponents
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import AccRepGridSection from "@/app/components/subpagecomponenets/accandrep/accrepgridsection";
import SecondSectionTypeTopAndBottom from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypetopandbottom";
import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import SubPagesAdvantegesSection from "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection";
import SubPagesGetStartedSection from "@/app/components/subpagecomponenets/subpagesgetstartedsection/subpagesgetstartedsection";

// importing accounting and reporting service page data
import accreptextdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accreptextdata.json";
import accrepleftstripdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accrepleftstripdata.json";
import accreprightstripdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accreprightstripdata.json";
import AccrepThirdSectionTextData from "@/app/data/subpagedata/accandrepdata/thirdsectionaccrep/accrepthirdsectiontextdata.json";
import AccrepThirdSectionLeftCardData from "@/app/data/subpagedata/accandrepdata/thirdsectionaccrep/accrepthirdsectionleftcarddata.json";
import AccrepThirdSectionRightCardData from "@/app/data/subpagedata/accandrepdata/thirdsectionaccrep/accrepthirdsectionrightcarddata.json";
import Accandrepindustriesdata from "@/app/data/subpagedata/accandrepdata/accandrepindustries.json";
import assadvtextdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/accadvtextdata.json";
import leftadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/lefsideadvdata.json";
import rightadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/rightsideadvdata.json";
import Accandrepgettingstarted from "@/app/data/subpagedata/accandrepdata/accandrepgettingstarted.json";

// importing utility mentods
import { getHeroData } from "@/app/utils/gethreodata";

export default function AccountingAndReporting() {
  const data = getHeroData("accounting-and-reporting");
  return (
    <>
      <SubPageHeroSection data={data} />
      <AccRepGridSection />
      <SecondSectionTypeTopAndBottom
        textdata={accreptextdata}
        leftstripcarddata={accrepleftstripdata}
        rightstripcarddata={accreprightstripdata}
      />
      <ThirdProcessSection
        textdata={AccrepThirdSectionTextData}
        leftstripcarddata={AccrepThirdSectionLeftCardData}
        rightstripcarddata={AccrepThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={Accandrepindustriesdata.heading}
        text={Accandrepindustriesdata.text}
      />
      <SubPagesAdvantegesSection
        advtitle={assadvtextdata.advtitle}
        advdesc={assadvtextdata.advdesc}
        leftdata={leftadvdata}
        rightdata={rightadvdata}
      />
      <SubPagesGetStartedSection
        headinggetstarted={Accandrepgettingstarted.heading}
        descriptiongetstarted={Accandrepgettingstarted.text}
      />
    </>
  );
}
