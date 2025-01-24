// importing library
import Image from "next/image";

export const LeftSectionLogo = () => {
  return (
    <div className="careers-form-logo">
      <Image
        src="/fgk_circular_logo.png"
        alt="FGK logo"
        width={200}
        height={200}
        className="careers-page-logo"
      />
    </div>
  );
};
