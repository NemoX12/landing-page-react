import "./privacybottom.css";

const Card = ({ title, text }) => {
  return (
    <div className="card__container">
      <h1 className="card__container-header">{title}</h1>
      <p className="card__container-text">{text}</p>
      <button className="card__container-btn">Read More</button>
    </div>
  );
};

const PrivacyBottom = () => {
  return (
    <div className="bottom__container">
      <Card
        title={"Outward clothes promise at gravity."}
        text={
          "End-to-end payments and financial management in a single solution. Meet the right platform to help realize."
        }
      />
      <Card
        title={"Sufficient particular impossible."}
        text={
          "End-to-end payments and financial management in a single solution. Meet the right platform to help realize."
        }
      />
    </div>
  );
};

export default PrivacyBottom;
