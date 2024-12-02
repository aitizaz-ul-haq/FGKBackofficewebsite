import MainPageHeroSection from "./components/pagecomponents/homepagecomps/mainpageherosection";
import testdata from "./data/testdata/testherodata.json";

export default function Home() {
  return (
    <>
      <main>
        <MainPageHeroSection
          title={testdata.title}
          paragraph={testdata.paragraph}
          forwardImage={testdata.forwardImage}
        />
      </main>
    </>
  );
}
