import Image from "next/image";

export default function ImageGridMobile({
  aboutimageone,
  aboutimagetwo,
  aboutimagethree,
}) {
  return (
    <div className="aboutpage-grid-container-mobile">
      <Image
        src={aboutimageone}
        alt="FGK logo"
        width={305}
        height={220}
        className="grid-images-mobile"
      />

      <Image
        src={aboutimagetwo}
        alt="FGK logo"
        width={305}
        height={220}
        className="grid-images-mobile"
      />

      <Image
        src={aboutimagethree}
        alt="FGK logo"
        width={305}
        height={220}
        className="grid-images-mobile"
      />
    </div>
  );
}
