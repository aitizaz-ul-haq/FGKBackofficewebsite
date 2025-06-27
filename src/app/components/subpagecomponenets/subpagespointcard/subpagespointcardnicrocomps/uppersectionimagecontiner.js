import Image from "next/image";

export default function UpperSectionImageContainer({advicon}) {
    return(
        <Image
          src={advicon}
          width={20}
          height={20}
          className="subpagespointcard-bullet"
        />
    );
}