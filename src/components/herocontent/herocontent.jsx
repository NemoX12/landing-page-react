import { FaPlay } from "react-icons/fa6";
import "./herocontent.css";

const HeroContent = () => {
  return (
    <div className="herocontent__container section__padding">
      <h1 className="herocontent__container-header">
        Managing your crypto portfolio has never been easier
      </h1>
      <p className="herocontent__container-paragraph">
        End-to-end payments and financial management in a single solution. Meet
        the right platform to help realize.
      </p>

      <div className="herocontent__container-nav">
        <button className="herocontent__container-nav__button">
          Get Started
        </button>

        <div className="herocontent__container-nav__extra">
          <button>
            <FaPlay size={20} />
          </button>
          <p>See How It Works</p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
