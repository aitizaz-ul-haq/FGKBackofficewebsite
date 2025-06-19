import ThirdProcessLeftSectionPara from "./thirdprocessleftsectionpara";
import ThirdProcessLeftSectionDescription from "./thirdprocessleftsectiondescription";
import ThirdProcessLeftSectionHeading from "./thirdprocessleftsectionheading";
import ThirdProcessLeftSectionButton from "./thirdprocessleftsectionbutton";

export default function ThirdProcessSectionsContainer({
  thirdsectiontitle,
  thirdsectiondescription,
  thirdsectionpara,
}) {
  return (
    <div className="thirdprocesssection-sections-container">
      <div className="thirdprocesssection-leftsection-text-container">
        <ThirdProcessLeftSectionHeading thirdsectiontitle={thirdsectiontitle} />
        <ThirdProcessLeftSectionDescription
          thirdsectiondescription={thirdsectiondescription}
        />
        <ThirdProcessLeftSectionPara thirdsectionpara={thirdsectionpara} />
        <ThirdProcessLeftSectionButton />
      </div>
    </div>
  );
}
