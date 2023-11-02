import { FeaturesImage } from "../../assets/images/imports";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio__container">
      <img src={FeaturesImage} alt="/" />
      <div className="portfolio__container-content">
        <div className="portfolio__container-content__main">
          <h3 className="portfolio__container-content__main-subheader">
            OUR FEATURE
          </h3>
          <h1 className="portfolio__container-content__main-header">
            All of your portfolios are linked to your LANDING PAGE account
          </h1>
        </div>
        <p className="portfolio__container-content__paragraph">
          Why kept very ever home mrs. Considered sympathize ten uncommonly
          occasional assistance sufficient not. Letter of on become he tended
          active enable to.{" "}
        </p>
        <button className="portfolio__container-content__btn">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
