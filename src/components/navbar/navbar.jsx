import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./navbar.css";

const Links = () => {
  return (
    <>
      <p>
        Product <MdKeyboardArrowDown />
      </p>
      <p>
        Template <MdKeyboardArrowDown />
      </p>
      <p>Blog</p>
      <p>Pricing</p>
    </>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="navbar__container">
      <h3 className="navbar__container-header">LANDING PAGE</h3>

      <div className="navbar__container-links">
        <Links />
      </div>

      <div className="navbar__container-auth">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>

      <div className="navbar__container-menu">
        <p
          onClick={() => {
            setNav((prev) => !prev);
          }}
        >
          {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </p>
        {nav && (
          <div className="navbar__container-menu__container scale-up-top">
            <>
              <Links />
              <div className="navbar__container-menu__container-auth">
                <p>Sign In</p>
                <button>Sign Up</button>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
