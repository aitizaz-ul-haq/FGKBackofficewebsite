import Link from "next/link";

export default function IndustriesCardRightSectionButtonCont({
  cardhint,
  cardlink,
}) {
  return (
    <Link href={cardlink} className="rightlinkage" title={cardhint}>
      <button className="rightsection-button font-inter">
        Get Expert Advice
      </button>
    </Link>
  );
}
