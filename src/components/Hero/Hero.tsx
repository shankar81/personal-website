import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import "./Hero.scss";

export default function Hero() {
  function onScrollDown() {
    window.scrollBy({ behavior: "smooth", top: 300 });
  }

  return (
    <div className="hero__container">
      <div className="hero__hero">
        <div className="hero__content">
          <h1 className="hero__heading">Hi i'm shankar sawant</h1>
          <h3 className="hero__subheading">I am Mobile/Web Developer</h3>
          <p className="hero__para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quibusdam minima, assumenda dolorem aliquam impedit quis totam
            explicabo exercitationem voluptate ab modi id aspernatur aperiam
            eaque rem facere officia et?
          </p>
          <PrimaryButton
            link="#Products-section"
            onClick={onScrollDown}
            label="Explore"
          />
        </div>
        {/* <img
          src={require("../../assets/images/profile.png").default}
          alt="Profile"
          className="hero__img"
        /> */}
      </div>
    </div>
  );
}
