import Image from "next/image";

export default function ContactsLeftLogoSection({ contactspagelogo }) {
  return (
    <div className="contacts-left-logo-section">
      <Image
        src={contactspagelogo}
        alt="FGK logo"
        width={200}
        height={200}
        className="contacts-page-fgk-logo"
      />
    </div>
  );
}
