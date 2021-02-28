import React, { useEffect, useState } from "react";
import "./Header.scss";
import classnames from "classnames";

export default function Header() {
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
        <li className="header__item">Home</li>
        <li className="header__item">About Us</li>
        <li className="header__item">Our Work</li>
        <li className="header__item">Blog</li>
        <li className="header__item">Contact us</li>
      </ul>
    </div>
  );
}