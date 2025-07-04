import Image from "next/image";
import Link from "next/link";

export default function HeaderLeftSection() {
  return (
    <div className="header-left-logosection">
      <Link href="/">
        <Image
          src="https://i.postimg.cc/Nj2KcbS0/fgk-letter-logo.webp"
          alt="FGK logo"
          width={170}
          height={28}
        />
      </Link>
    </div>
  );
}
