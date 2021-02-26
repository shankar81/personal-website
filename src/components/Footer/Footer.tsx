import React from "react";
import classes from "./Footer.module.scss";
import { SiGithub, SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <div className={classes.container}>
      <ul className={classes.copyright}>
        <li className={classes.item}>&#169; Copyright</li>
        <li className={classes.item}>
          All rights reserved. Powered by Shankar Sawant
        </li>
      </ul>
      <ul className={classes.list}>
        <h4 className={classes.heading}>Say</h4>
        <li className={classes.item}>
          <a
            href="mailto:shankarsawant81@gmail.com?subject=Say something"
            className={classes.link}
          >
            shankarsawant81@gmail.com
          </a>
        </li>
        <li className={classes.item}>+91 9699895355</li>
      </ul>
      <ul className={classes.list}>
        <h4 className={classes.heading}>Links</h4>
        <li className={classes.item}>
          <a href="http" className={classes.link}>
            Home
          </a>
        </li>
        <li className={classes.item}>
          <a href="http" className={classes.link}>
            About Us
          </a>
        </li>
        <li className={classes.item}>
          <a href="http" className={classes.link}>
            Our Work
          </a>
        </li>
        <li className={classes.item}>
          <a href="http" className={classes.link}>
            Blog
          </a>
        </li>
        <li className={classes.item}>
          <a href="http" className={classes.link}>
            Contact Us
          </a>
        </li>
      </ul>
      <div className={classes.social}>
        <h4 className={classes.heading}>Follow Us</h4>
        <ul className={classes.socialList}>
          <li className={classes.socialItem}>
            <a
              href="https://github.com/shankar81"
              className={classes.socialLink}
            >
              <SiGithub className={classes.icon} />
            </a>
          </li>
          <li className={classes.socialItem}>
            <a
              href="https://twitter.com/shankarswnt"
              className={classes.socialLink}
            >
              <SiTwitter className={classes.icon} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
