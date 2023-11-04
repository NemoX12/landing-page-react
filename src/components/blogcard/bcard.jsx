import "./bcard.css";

const BCard = ({ text, image }) => {
  return (
    <div className="bcard__container">
      <div className="bcard__container-content">
        <h3 className="bcard__container-content__header">BEST PRACTICES</h3>
        <p className="bcard__container-content__text">{text}</p>
      </div>
      <div className="bcard__container-image">
        <img src={image} alt="/" />
      </div>
    </div>
  );
};

export default BCard;
