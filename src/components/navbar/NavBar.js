import React, { useState } from "react";

import { Link } from "@reach/router";

//Styles
import "./styles/styles.scss";
import Logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <section className="header">
      <div className="container">
        <i
          onClick={() => {
            setShow(!show)
          }}
          className="hamburger-menu"
        >
          <GiHamburgerMenu size="32px" />
        </i>
        <div className="logo">
          <img className="img-logo" src={Logo} alt="logo-ariadna" />
        </div>
        <nav className="menu">
          <ol>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">CATEGORIES</Link>
            </li>
            <li>
              <Link to="/">MY FAVORITES</Link>
            </li>
            <li>
              <Link to="/">SIGN IN</Link>
            </li>
          </ol>
        </nav>
      </div>
      {show && (
        <nav className="new-menu">
          <ol>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">CATEGORIES</Link>
            </li>
            <li>
              <Link to="/">MY FAVORITES</Link>
            </li>
            <li>
              <Link to="/">SIGN IN</Link>
            </li>
          </ol>
        </nav>
      )}
    </section>
  );
}
