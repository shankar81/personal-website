import React from "react";
import classes from "./Landing.module.scss";

export default function LandingPage() {
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <div className={classes.content}>
          <h1 className={classes.heading}>Hi i'm shankar sawant</h1>
          <h3 className={classes.subheading}>I am Mobile/Web Developer</h3>
          <p className={classes.para}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quibusdam minima, assumenda dolorem aliquam impedit quis totam
            explicabo exercitationem voluptate ab modi id aspernatur aperiam
            eaque rem facere officia et?
          </p>
          <button className={classes.button}>Hire me</button>
        </div>
        {/* <img
          src={require("../../assets/images/profile.png").default}
          alt="Profile"
          className={classes.img}
        /> */}
      </div>
    </div>
  );
}
