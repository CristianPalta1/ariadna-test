import React from "react";

//Styles
import "./styles/styles.scss";

export default function NavBar() {
  return (
    <section className="header">
      <div className="container">
        <div className="logo">logo</div>
        <nav className="menu">
          <ol>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a>CATEGORIES</a>
            </li>
            <li>
              <a>MY FAVORITES</a>
            </li>
            <li>
              <a>SIGN IN</a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
