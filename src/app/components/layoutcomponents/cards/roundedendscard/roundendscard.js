import "./roundendscards.css";
import Image from "next/image";

export default function RoundEndsCards() {
  return (
    <>
      <div className="roundendscard-container">
        <div className="top-card">
          <div className="left-circular-section">
            <Image
              src="/operations_support_circular_icon.png"
              alt="card icon"
              width={400}
              height={400}
              className="teampageteamcard-mobile-image"
            />
          </div>
          <div className="right-details-section">
            <div className="right-roundedcard-heading">Operations Support</div>
            <div className="right-roundedcard-description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a
            </div>
            <div className="right-roundedcard-arrowhead-button">
              Consult with Us
            </div>
          </div>
        </div>
        <div className="bottom-card"></div>
      </div>
    </>
  );
}
