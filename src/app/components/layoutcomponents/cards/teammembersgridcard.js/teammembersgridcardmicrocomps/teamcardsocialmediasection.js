import Image from "next/image";
import Link from "next/link";

export default function TeamCardSocialMediaSection({
  facebooklink,
  xlink,
  linkdinlink,
}) {
  return (
    <div className="social-media-icons-group-container">
      <Link href={facebooklink}>
        <Image
          src="https://i.postimg.cc/bN3xJ6mH/facebook-dark.webp"
          alt="FGK Team members socials"
          width={40}
          height={40}
          className="team-member-social-media-icon"
        />
      </Link>
      <Link href={xlink}>
        <Image
          src="https://i.postimg.cc/rshNvgbJ/linkdin.webp"
          alt="FGK Team members socials"
          width={40}
          height={40}
          className="team-member-social-media-icon"
        />
      </Link>
      <Link href={linkdinlink}>
        <Image
          src="https://i.postimg.cc/1z0SDYf4/x.webp"
          alt="FGK Team members socials"
          width={40}
          height={40}
          className="team-member-social-media-icon"
        />
      </Link>
    </div>
  );
}
