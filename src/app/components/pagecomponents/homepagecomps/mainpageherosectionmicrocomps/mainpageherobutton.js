import Link from "next/link";

export default function MainPageHeroButton({ buttonhint }) {
  return (
    <Link className="manihero-linkage" href="/contact" title={buttonhint}>
      <div className="main-page-hero-button font-inter">Get Expert Advice</div>
    </Link>
  );
}
