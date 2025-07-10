import Image from "next/image";
import Link from "next/link";

export default function HeaderLeftSection() {
  return (
    <div className="header-left-logosection">
      <Link href="/">
        <Image
          src="https://i.postimg.cc/Nj2KcbS0/fgk-letter-logo.webp"
          alt="FGK logo for header"
          width={170}
          height={28}
          priority // ← Loads image with high priority
          fetchPriority="high" // ← Explicitly adds fetchpriority attribute (newer browsers)
        />
      </Link>
    </div>
  );
}
