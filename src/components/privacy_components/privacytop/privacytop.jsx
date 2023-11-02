import { Shield, Building, Server } from "../../../assets/images/imports";
import "./privacytop.css";

const Option = ({ icon, text }) => {
  return (
    <div className="option__container">
      <span className="option__container-image">
        <img src={icon} alt="/" />
      </span>
      <p className="option__container-text">{text}</p>
    </div>
  );
};

const PrivacyTop = () => {
  return (
    <div className="top__container">
      <h1 className="top__container-header">Germany-based & GDPR Compliant</h1>
      <div className="top__container-content">
        <Option icon={Shield} text={"Data does not leave our servers"} />
        <Option icon={Building} text={"Own infrastructure"} />
        <Option icon={Server} text={"Most renowed data centers"} />
      </div>
    </div>
  );
};

export default PrivacyTop;
