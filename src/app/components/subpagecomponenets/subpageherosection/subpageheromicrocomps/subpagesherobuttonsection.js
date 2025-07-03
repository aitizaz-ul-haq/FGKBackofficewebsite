import Link from "next/link";

export default function SubPagesHeroButtonSection({buttonhint}) {
    return(
         <div className="subpagehero-button-container">
          <Link href="/contact" className="subpagehero-button" title={buttonhint}>
          <div className="subpagehero-button font-inter text-extralight">
            Get Expert Help
          </div>
          </Link>
        </div>
    );
}