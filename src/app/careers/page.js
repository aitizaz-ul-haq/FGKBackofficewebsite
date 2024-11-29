import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import testdata from "../data/testdata/testherodata.json";

export default function Careers() {
  return (
    <>
      <MainHeroSection
        title={testdata.title}
        paragraph={testdata.paragraph}
        forwardImage={testdata.forwardImage}
      />
    </>
  );
}
