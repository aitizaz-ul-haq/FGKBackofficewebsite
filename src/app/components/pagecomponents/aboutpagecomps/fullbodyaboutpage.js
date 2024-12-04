import "./styles/fullbodyaboutpage.css";
import Image from "next/image";

export default function FullBodyAboutPage() {
  return (
    <div className="aboutpagecontent-container">
      {/* upper section */}
      <div className="aboutpagecontaent-logo-introsection">
        <div className="left-logo-section">
          {" "}
          <Image
            src="/fgk_circular_logo.png"
            alt="FGK logo"
            width={280}
            height={280}
            className="fgk-logo-about"
          />
        </div>
        <div className="right-intro-section">
          <h2 className="right-heading-section font-inter text-light">
            About Us
          </h2>
          <p className="right-description-section font-inter text-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a It is a long established fact that a
            reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a
          </p>
          <p className="right-description-section font-inter text-light">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a It is a long established fact that a reader will
          </p>
        </div>
      </div>

      {/* middle section */}
      <div className="aboutpagecontent-middle-section">
        <p className="first-para font-inter text-light">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a It
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
        </p>
        <p className="second-para font-inter text-light">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a It
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a It
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
        </p>
      </div>

      {/* last section */}
      <div className="aboutpagecontent-last-section">
        <p className="last-para font-inter text-light">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
        </p>
      </div>

      {/* image grid */}
      <div className="aboutpage-grid-container">
        <div className="left-grid-image-section">
          <Image
            src="/fgk_circular_logo.png"
            alt="FGK logo"
            width={480}
            height={380}
            className="fgk-logo-about"
          />
        </div>
        <div className="right-grid-image-section">
          <div className="grid-right-top-section">
            <Image
              src="/fgk_circular_logo.png"
              alt="FGK logo"
              width={180}
              height={180}
              className="fgk-logo-about"
            />
          </div>
          <div className="grid-right-bottom-section">
            <Image
              src="/fgk_circular_logo.png"
              alt="FGK logo"
              width={180}
              height={180}
              className="fgk-logo-about"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
