import Image from "next/image";
import Link from "next/link";

export default function FooterSocialMediaSection() {
  return (
    <div className="social-media-button-container button-group">
      <Link href="/">
        <Image
          src="https://i.postimg.cc/8CxvrcfT/youtube.webp"
          alt="FGK logo"
          width={40}
          height={40}
          className="footer-social-icon"
        />
      </Link>
      <Link href="/">
        <Image
          src="https://i.postimg.cc/DwnNVY8r/facebook.webp"
          alt="FGK logo"
          width={40}
          height={40}
          className="footer-social-icon"
        />
      </Link>
      <Link href="/">
        <Image
          src="https://i.postimg.cc/1z0SDYf4/x.webp"
          alt="FGK logo"
          width={40}
          height={40}
          className="footer-social-icon"
        />
      </Link>
      <Link href="/">
        <Image
          src="https://i.postimg.cc/rshNvgbJ/linkdin.webp"
          alt="FGK logo"
          width={40}
          height={40}
          className="footer-social-icon"
        />
      </Link>
      <Link href="/">
        <Image
          src="https://i.postimg.cc/VNyWQJ73/instagram.webp"
          alt="FGK logo"
          width={40}
          height={40}
          className="footer-social-icon"
        />
      </Link>
    </div>
  );
}
