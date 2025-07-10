import dynamic from "next/dynamic";
import "./styles/thirdprocesssection.css";

const ThirdProcessSectionsContainer = dynamic(() =>
  import("./thirdprocessmicrocomps/thirdprocesssectionscontainer")
);

const ThirdProcessSectionBottomContiner = dynamic(() =>
  import("./thirdprocessmicrocomps/thirdprocesssectionbottomcontainer")
);

const ThirdProcessButton = dynamic(() =>
  import("./thirdprocessmicrocomps/thirdprocessbutton")
);

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
