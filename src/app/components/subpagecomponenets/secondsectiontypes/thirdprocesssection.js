import "./styles/thirdprocesssection.css";
import ThirdProcessSectionsContainer from "./thirdprocessmicrocomps/thirdprocesssectionscontainer";
import ThirdProcessSectionBottomContiner from "./thirdprocessmicrocomps/thirdprocesssectionbottomcontainer";
import ThirdProcessButton from "./thirdprocessmicrocomps/thirdprocessbutton";

export default function ThirdProcessSection({
  textdata,
  leftstripcarddata,
  rightstripcarddata,
}) {
  return (
    <div
      className="thirdprocesssection-container"
      style={{
        backgroundImage: `url(${textdata.thirdsectionpagebackground})`,
      }}
    >
      <ThirdProcessSectionsContainer
        thirdsectiontitle={textdata.thirdsectiontitle}
        thirdsectiondescription={textdata.thirdsectionparaone}
        thirdsectionpara={textdata.thirdtextsectionparatwo}
      />
      <ThirdProcessSectionBottomContiner
        leftstripcarddata={leftstripcarddata}
        rightstripcarddata={rightstripcarddata}
      />
      <ThirdProcessButton />
    </div>
  );
}
