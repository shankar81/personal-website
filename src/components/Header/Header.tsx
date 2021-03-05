import React, { useEffect, useState } from "react";
import "./Header.scss";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

interface Props {
  onChangeTheme: () => void;
}
export default function Header(props: Props) {
  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setScrolledEnough(true);
      } else {
        if (scrolledEnough) {
          setScrolledEnough(false);
        }
      }
    });
  }, [scrolledEnough]);

  const containerClasses = ["header__container"];
  if (scrolledEnough) {
    containerClasses.push("header__containerBg");
  }
  return (
    <div className={classnames(...containerClasses)}>
      <ul className="header__list">
        <NavLink exact
          activeClassName="header__item--active"
          className="header__item"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="header__item--active"
          className="header__item"
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          activeClassName="header__item--active"
          className="header__item"
          to="/work"
        >
          Our Work
        </NavLink>
        <NavLink
          activeClassName="header__item--active"
          className="header__item"
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          activeClassName="header__item--active"
          className="header__item"
          to="/contact"
        >
          Contact us
        </NavLink>
        <li onClick={props.onChangeTheme} className="header__item">
          Change Theme
        </li>
      </ul>
    </div>
  );
}
