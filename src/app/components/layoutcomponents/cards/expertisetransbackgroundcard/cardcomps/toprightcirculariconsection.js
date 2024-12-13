import Image from "next/image";

export default function TopRightCircularIconSection({ cardicon }) {
  return (
    <div className="top-right-circular-icon">
      <Image
        src={cardicon}
        alt="FGK logo"
        width={90}
        height={90}
        className="footer-social-icon"
      />
    </div>
  );
}
