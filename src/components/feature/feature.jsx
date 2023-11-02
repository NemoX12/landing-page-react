import "./feature.css";

const Feature = ({ num, title, desc }) => {
  return (
    <div className="feature__container">
      <p className="feature__container-number">{num}</p>
      <div className="feature__container-content">
        <h1 className="feature__container-content__header">{title}</h1>
        <p className="feature_container-content__desc">{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
