import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { SiThemighty } from "react-icons/si";
import { Link as Scroll } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <Scroll
                activeClass="active"
                to="hero-container"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-60}
                duration={700}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
                className="navbar-logo" onClick={closeMobileMenu}
              >

              
            <SiThemighty />
          </Scroll>
          <div className="menu-icon" onClick={handleClick}>
          
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
            
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Scroll
                activeClass="active"
                to="cards"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-70}
                duration={700}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                My Work
              </Scroll>
            </li>

            <li>
            <Scroll
                activeClass="active"
                to="footer-container"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-70}
                duration={700}
                delay={100}
                isDynamic={true}
                ignoreCancelEvents={false}
                className="nav-links"
                onClick={closeMobileMenu}

              >

                Contact

              </Scroll>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>CONTACT</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
