import Image from "next/image";
import Link from "next/link";

export default function FooterSocialMediaSection() {
  return (
    <div className="social-media-button-container button-group">
      <Link href="/">
        <Image
          src="/youtube.png"
          alt="FGK logo"
          width={40}
          height={40}
          className="footer-social-icon"
        />
      </Link>
      <Link href="/">
        <Image
          src="/facebook.png"
          alt="FGK logo"
          width={40}
          height={40}
          className="footer-social-icon"
        />
      </Link>
      <Link href="/">
        <Image
          src="/x.png"
          alt="FGK logo"
          width={40}
          height={40}
          className="footer-social-icon"
        />
      </Link>
      <Link href="/">
        <Image
          src="/linkdin.png"
          alt="FGK logo"
          width={40}
          height={40}
          className="footer-social-icon"
        />
      </Link>
      <Link href="/">
        <Image
          src="/instagram.png"
          alt="FGK logo"
          width={40}
          height={40}
          className="footer-social-icon"
        />
      </Link>
    </div>
  );
}
