import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import AccRepGridSection from "@/app/components/subpagecomponenets/accandrep/accrepgridsection";
import SecondSectionTypeTopAndBottom from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypetopandbottom";
import accreptextdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accreptextdata.json";
import accrepleftstripdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accrepleftstripdata.json";
import accreprightstripdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accreprightstripdata.json";

export default function AccountingAndReporting() {
  const data = getHeroData("accounting-&-reporting");
  return (
    <>
      <SubPageHeroSection data={data} />
      <AccRepGridSection />
      <SecondSectionTypeTopAndBottom
        textdata={accreptextdata}
        leftstripcarddata={accrepleftstripdata}
        rightstripcarddata={accreprightstripdata}
      />
    </>
  );
}
