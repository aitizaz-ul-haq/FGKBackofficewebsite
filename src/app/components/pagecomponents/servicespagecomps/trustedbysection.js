import Image from "next/image";
import "./styles/trustedbysection.css";

export default function TrustedBySection() {
  return (
    <div className="trustedby-container">
      <div className="trustedby-heading font-roboto-sarif text-light">
        Trusted By
      </div>
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
    </div>
  );
}
