import { BsArrowRight } from "react-icons/bs";
import "./cta.css";

const CTA = () => {
  return (
    <div className="cta__container">
      <h1 className="cta__container-header">
        Join millions of creative people with LANDING PAGE
      </h1>
      <button className="cta__container-btn">
        Join The Waitlist <BsArrowRight />
      </button>
    </div>
  );
};

export default CTA;
