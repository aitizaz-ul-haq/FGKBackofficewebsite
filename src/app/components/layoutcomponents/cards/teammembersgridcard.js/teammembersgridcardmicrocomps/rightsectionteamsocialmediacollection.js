import Link from "next/link";
import Image from "next/image";

export default function RightSectionTeamSocialMediaCollection({ facebooklink, linkdinlink, xlink }) {
    return(
        <div className="rightsection-button-group">
              <Link href={facebooklink} passHref>
                <Image
                  src="https://i.postimg.cc/bN3xJ6mH/facebook-dark.webp"
                  alt="facebookicon"
                  width={50}
                  height={50}
                  className="teampageteamcard-social-media"
                />
              </Link>
              <Link href={linkdinlink} passHref>
                <Image
                  src="https://i.postimg.cc/rshNvgbJ/linkdin.webp"
                  alt="lindinicon"
                  width={50}
                  height={50}
                  className="teampageteamcard-social-media"
                />
              </Link>
              <Link href={xlink} passHref>
                <Image
                  src="https://i.postimg.cc/1z0SDYf4/x.webp"
                  alt="xicon"
                  width={50}
                  height={50}
                  className="teampageteamcard-social-media"
                />
              </Link>
            </div>
    );
}