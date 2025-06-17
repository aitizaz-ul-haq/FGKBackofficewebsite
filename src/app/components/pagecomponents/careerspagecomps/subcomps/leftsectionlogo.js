// importing library
import Image from "next/image";

export const LeftSectionLogo = () => {
  return (
    <div className="careers-form-logo">
      <Image
        src="https://i.postimg.cc/4y8YJ0XY/fgk-circular-logo.webp"
        alt="FGK logo"
        width={200}
        height={200}
        className="careers-page-logo"
      />
    </div>
  );
};
