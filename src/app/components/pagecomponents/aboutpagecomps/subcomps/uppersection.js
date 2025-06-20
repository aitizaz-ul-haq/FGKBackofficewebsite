import LeftLogoSectionMobile from "./uppersectionmicrocomps/leftlogosectionmobile";
import LeftLogoSection from "./uppersectionmicrocomps/leftlogosection";
import RightIntroSection from "./uppersectionmicrocomps/rightintrosection";

export default function UpperSection({
  companylogo,
  topdescriptionparaone,
  topdescriptionparatwo,
  topdescriptionparathree,
}) {
  return (
    <div className="aboutpagecontaent-logo-introsection">
      <LeftLogoSectionMobile companylogo={companylogo} />
      <LeftLogoSection companylogo={companylogo} />
      <RightIntroSection
        topdesparaone={topdescriptionparaone}
        topdescparatwo={topdescriptionparatwo}
        topdescparathree={topdescriptionparathree}
      />
    </div>
  );
}
