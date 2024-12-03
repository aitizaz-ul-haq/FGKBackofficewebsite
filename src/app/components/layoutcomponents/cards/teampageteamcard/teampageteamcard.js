import "./teampageteamcard.css";
import Link from "next/link";
import Image from "next/image";

export default function TeamPageTeamCard({
  photo,
  name,
  designation,
  description,
  facebooklink,
  xlink,
  linkdinlink,
  isReversed,
}) {
  return (
    <div className="teampageteamcard-container">
      {isReversed ? (
        <>
          {/* Right section first */}
          <div className="teampageteamcard-rightsection">
            <Image
              src={photo}
              alt="card icon"
              width={550}
              height={350}
              className="teampageteamcard-mobile-image"
            />

            <h2 className="rightsection-heading font-robot-sarif">{name}</h2>
            <h3 className="rightsection-designation font-inter text-light">
              {designation}
            </h3>
            <p className="rightsection-description font-inter text-light">
              {description}
            </p>
            <div className="rightsection-button-group">
              <Link href={facebooklink} passHref>
                <Image
                  src="/facebook dark.png"
                  alt="facebookicon"
                  width={50}
                  height={50}
                  className="teampageteamcard-social-media"
                />
              </Link>
              <Link href={linkdinlink} passHref>
                <Image
                  src="/linkdin.png"
                  alt="lindinicon"
                  width={50}
                  height={50}
                  className="teampageteamcard-social-media"
                />
              </Link>
              <Link href={xlink} passHref>
                <Image
                  src="/x.png"
                  alt="xicon"
                  width={50}
                  height={50}
                  className="teampageteamcard-social-media"
                />
              </Link>
            </div>
          </div>
          <div className="teampageteamcard-leftsection">
            <Image
              src={photo}
              alt="card icon"
              width={550}
              height={350}
              className="teampageteamcard-left-image"
            />
          </div>
        </>
      ) : (
        <>
          {/* Left section first */}
          <div className="teampageteamcard-leftsection">
            <Image
              src={photo}
              alt="card icon"
              width={550}
              height={350}
              className="teampageteamcard-left-image"
            />
          </div>
          <div className="teampageteamcard-rightsection">
            <Image
              src={photo}
              alt="card icon"
              width={550}
              height={350}
              className="teampageteamcard-mobile-image"
            />

            <h2 className="rightsection-heading font-robot-sarif">{name}</h2>
            <h3 className="rightsection-designation font-inter text-light">
              {designation}
            </h3>
            <p className="rightsection-description font-inter text-light">
              {description}
            </p>
            <div className="rightsection-button-group">
              <Link href={facebooklink} passHref>
                <Image
                  src="/facebook dark.png"
                  alt="facebookicon"
                  width={50}
                  height={50}
                  className="teampageteamcard-social-media"
                />
              </Link>
              <Link href={linkdinlink} passHref>
                <Image
                  src="/linkdin.png"
                  alt="lindinicon"
                  width={50}
                  height={50}
                  className="teampageteamcard-social-media"
                />
              </Link>
              <Link href={xlink} passHref>
                <Image
                  src="/x.png"
                  alt="xicon"
                  width={50}
                  height={50}
                  className="teampageteamcard-social-media"
                />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
