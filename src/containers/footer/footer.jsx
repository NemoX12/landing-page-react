import { CTA, Navigation } from "../../components/imports";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer__container section__padding">
      <CTA />
      <Navigation />
      <div className="footer__container-copyright">
        <p>
          2023 LANDING PAGE. All rights reserved. -- Privacy Policy - Terms of
          Services
        </p>
        <p>Supported by Microsoft Startup</p>
      </div>
    </footer>
  );
};

export default Footer;
