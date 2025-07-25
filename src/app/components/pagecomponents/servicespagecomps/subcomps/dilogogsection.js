import Image from "next/image";
export const DiLogoSection = () => {
  return (
    <div className="di-logo-section">
      <Image
        src="/images/nemesis_logo.webp"
        width={280}
        height={280}
        className="trustedby-logo-one"
        alt="client-logo"
      />
      <Image
        src="/images/nemesis_logo.webp"
        width={280}
        height={280}
        className="trustedby-logo-two"
        alt="client-logo"
      />
    </div>
  );
};
