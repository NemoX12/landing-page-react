import "./heroimage.css";
import { HeaderContent } from "../../assets/images/imports";

const HeroImage = () => {
  return (
    <div className="heroimage__container">
      <img src={HeaderContent} alt="" />
    </div>
  );
};

export default HeroImage;
