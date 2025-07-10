import Image from "next/image";

export default function StripCardRightSection({ stripicon }) {
  return (
    <div className="secondsectionstripcard-rightsection">
      <Image
        src={stripicon}
        width={40}
        height={40}
        className="secondsectionstripcard-icon"
        alt="strip-card-icon"
      />
    </div>
  );
}
