import { Feature } from "../../components/imports";
import { BenefitsImage } from "../../assets/images/imports";
import "./benefits.css";

const Benefits = () => {
  return (
    <div className="benefits__container section__padding">
      <div className="benefits__container-top__section">
        <h1 className="benefits__container-top__section-header">
          Yet preference connection unpleasant yet melancholy but end appearance
        </h1>
        <div className="benefits__container-top__section-button">
          <button>Get Started Now</button>
        </div>
      </div>
      <div className="benefits__container-bottom__section">
        <div className="benefits__container-bottom__section-features">
          <Feature
            num={1}
            title={"First Working Process"}
            desc={
              "Blessing it ladyship on sensible judgment settling outweigh."
            }
          />
          <br />
          <br />
          <Feature
            num={2}
            title={"Dedicated Team"}
            desc={"Warmly little before cousin sussex entire men set."}
          />
          <br />
          <br />
          <Feature
            num={3}
            title={"24/7 Hours Support"}
            desc={
              "And excellence partiality estimating terminated day everything."
            }
          />
        </div>
        <img src={BenefitsImage} alt="" />
      </div>
    </div>
  );
};

export default Benefits;
