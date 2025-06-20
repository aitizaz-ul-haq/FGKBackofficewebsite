import Image from "next/image";

export default function IndustriesCardRightSectionImageCont({cardicon}) {
    return(
        <Image
        src={cardicon}
        alt="card icon"
        width={150}
        height={150}
        className="industriescard-mobile-image"
      />
    );
}