import {
  OpenZeppelinLogo,
  OracleLogo,
  MorpheusLogo,
  SamsungLogo,
  MondayLogo,
  SegmentLogo,
  ProtoneLogo,
} from "../../assets/images/imports";
import "./partnershiplogos.css";

const PartnershipLogos = () => {
  return (
    <div className="partnershiplogos__container">
      <img src={OpenZeppelinLogo} alt="OpenZeppelinLogo" />
      <img src={OracleLogo} alt="OracleLogo" />
      <img src={MorpheusLogo} alt="MorpheusLogo" />
      <img src={SamsungLogo} alt="SamsungLogo" />
      <img src={MondayLogo} alt="MondayLogo" />
      <img src={SegmentLogo} alt="SegmentLogo" />
      <img src={ProtoneLogo} alt="ProtoneLogo" />
    </div>
  );
};

export default PartnershipLogos;
