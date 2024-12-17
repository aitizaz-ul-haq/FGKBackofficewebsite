import Image from "next/image";
import Link from "next/link";

export default function HeaderLeftSection() {
  return (
    <>
      <div className="header-left-logosection">
        <Link href="/">
          <Image
            src="/fgk_letter_logo.png"
            alt="FGK logo"
            width={170}
            height={28}
          />
        </Link>
      </div>
    </>
  );
}
