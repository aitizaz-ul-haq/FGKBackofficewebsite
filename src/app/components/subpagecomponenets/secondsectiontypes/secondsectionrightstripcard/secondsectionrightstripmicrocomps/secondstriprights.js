import Image from "next/image";

export default function SecondStripRights({ stripicon }) {
  return (
    <div className="secondsectionstripcardright-rightsection">
      <Image
        src={stripicon}
        width={40}
        height={40}
        className="secondsectionstripcardright-icon"
        alt="stripcard-image"
      />
    </div>
  );
}
