import Link from "next/link";

export const CircularCardButtonContainer = () => {
  return (
    <div className="circular-card-large-button-container">
      <Link className="circular-linkage" href="/contact" title="Talk to experts now">
        <button className="circularcard-button font-inter text-bold">
          Get Expert Advice
        </button>
      </Link>
    </div>
  );
};
