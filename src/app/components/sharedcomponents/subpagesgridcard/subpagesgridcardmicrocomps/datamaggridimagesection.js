import Image from "next/image";

export default function DataMaggridImagesSection({ gridcardicon }) {
  return (
    <Image
      src={gridcardicon}
      width={70}
      height={70}
      className="subpagesgridcard-icon"
      alt="gridcard-icon"
    />
  );
}
