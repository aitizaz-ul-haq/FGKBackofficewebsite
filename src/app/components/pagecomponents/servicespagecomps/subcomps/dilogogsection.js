import Image from "next/image";
export const DiLogoSection = () => {
  return (
    <div className="di-logo-section">
      <Image
        src="/nemesis_logo.png"
        width={280}
        height={280}
        className="trustedby-logo-one"
      />
      <Image
        src="/nemesis_logo.png"
        width={280}
        height={280}
        className="trustedby-logo-two"
      />
    </div>
  );
};
