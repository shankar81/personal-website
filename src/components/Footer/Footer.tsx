import React from "react";
import "./Footer.scss";
import { SiGithub, SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer__container">
      <ul className="footer__copyright">
        <li className="footer__item">&#169; Copyright</li>
        <li className="footer__item">
          All rights reserved. Powered by Shankar Sawant
        </li>
      </ul>
      <ul className="footer__list">
        <h4 className="footer__heading">Say</h4>
        <li className="footer__item">
          <a
            href="mailto:shankarsawant81@gmail.com?subject=Say something"
            className="footer__link"
          >
            shankarsawant81@gmail.com
          </a>
        </li>
        <li className="footer__item">+91 9699895355</li>
      </ul>
      <ul className="footer__list">
        <h4 className="footer__heading">Links</h4>
        <li className="footer__item">
          <a href="http" className="footer__link">
            Home
          </a>
        </li>
        <li className="footer__item">
          <a href="http" className="footer__link">
            About Us
          </a>
        </li>
        <li className="footer__item">
          <a href="http" className="footer__link">
            Our Work
          </a>
        </li>
        <li className="footer__item">
          <a href="http" className="footer__link">
            Blog
          </a>
        </li>
        <li className="footer__item">
          <a href="http" className="footer__link">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="footer__social">
        <h4 className="footer__heading">Follow Us</h4>
        <ul className="footer__socialList">
          <li className="footer__socialItem">
            <a
              href="https://github.com/shankar81"
              className="footer__socialLink"
            >
              <SiGithub className="footer__icon" />
            </a>
          </li>
          <li className="footer__socialItem">
            <a
              href="https://twitter.com/shankarswnt"
              className="footer__socialLink"
            >
              <SiTwitter className="footer__icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
