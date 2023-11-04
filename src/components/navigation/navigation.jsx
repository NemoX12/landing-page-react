import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navigation__container">
      <div className="navigation__container-content">
        <h3 className="navigation__container-content-header">LANDING PAGE</h3>
        <p className="navigation__container-content-text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment.
        </p>
      </div>
      <div className="navigation__container-links__container">
        <div className="navigation__container-links__container-group">
          <h2>Company</h2>
          <br />
          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>Pricing</p>
        </div>
        <div className="navigation__container-links__container-group">
          <h2>Product</h2>
          <br />
          <p>Invoicing Platform</p>
          <p>Accounting Plateform</p>
          <p>Create Proposal</p>
          <p>Contracts</p>
        </div>
        <div className="navigation__container-links__container-group">
          <h2>Resources</h2>
          <br />
          <p>Proposal Template</p>
          <p>Invoice Template</p>
          <p>Tutorial</p>
          <p>How to write a contract</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
