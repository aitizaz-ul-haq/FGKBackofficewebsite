import "./styles/chooseussection.css";
import ChooseUsRightSection from "./subcomps/chooseusrightsection";
import ChooseUsLeftSection from "./subcomps/chooseusleftsection";

export default function ChooseUsSection() {
  return (
    <div className="chooseus-container">
      <ChooseUsLeftSection />
      <ChooseUsRightSection />
    </div>
  );
}
