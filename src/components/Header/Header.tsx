import React from "react";
import classes from './Header.module.scss'

export default function Header() {
  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        <li className={classes.item}>Home</li>
        <li className={classes.item}>About Us</li>
        <li className={classes.item}>Our Work</li>
        <li className={classes.item}>Blog</li>
        <li className={classes.item}>Contact us</li>
      </ul>
    </div>
  );
}
