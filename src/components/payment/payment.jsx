import { FeaturesPayment } from "../../assets/images/imports";
import "./payment.css";

const Payment = () => {
  return (
    <div className="payment__container">
      <div className="payment__container-content">
        <div className="payment__container-content">
          <div className="payment__container-content__main">
            <h3 className="payment__container-content__main-subheader">
              OUR FEATURE
            </h3>
            <h1 className="payment__container-content__main-header">
              All of your portfolios are linked to your LANDING PAGE account
            </h1>
          </div>
          <p className="payment__container-content__paragraph">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.{" "}
          </p>
          <button className="payment__container-content__btn">
            Get Started
          </button>
        </div>
      </div>
      <img src={FeaturesPayment} alt="/" />
    </div>
  );
};

export default Payment;
