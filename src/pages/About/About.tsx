import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Skills from "../../components/Skills/Skills";
import Timeline from "../../components/Timeline/Timeline";
import "./About.scss";

export default function About() {
  return (
    <div className="about__container">
      <div className="about__top">
        <div className="about__top--content">
          <h1 className="about__heading">About Me</h1>
          {/* @TODO refactor to seperate component to use on other pages also */}
          <p className="about__link">Home / About Me</p>
        </div>
      </div>

      <div className="about__me">
        <div className="about__me--content">
          <h1 className="about__me--heading">
            My name is Shankar Sawant. I'm about Development and learning
          </h1>
          <p className="about__me--para">
            Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus
            dapibus, erat ullamcorper odio augue eleifend, consequat enim
            ullamcorper magnis dignissim nec phasellus, Lorem ipsum dolor sit
            amet, justo nunc orci donec.Lorem ipsum dolor sit amet, justo nunc
            orci donec sagittis metus sagittis metus dapibus, erat ullamcorper
            odio augue eleifend, consequat enim metus dapibus, erat ullamcorper
            odio augue eleifend, consequat enim
          </p>
          <p className="about__me--para">
            Lorem ipsum dolor sit amet, justo nunc orci donec sagittis metus
            dapibus, erat ullamcorper odio augue eleifend, consequat enim
            ullamcorper magnis dignissim nec phasellus, Lorem ipsum dolor sit
            amet, justo nunc orci donec.Lorem ipsum dolor sit amet, justo nunc
            orci donec sagittis metus sagittis metus dapibus, erat ullamcorper
            odio augue eleifend, consequat enim metus dapibus, erat ullamcorper
            odio augue eleifend, consequat enim
          </p>
          <PrimaryButton link="#About" label="Hire Me" />
        </div>
      </div>

      <div className="about__timeline">
        <h1 className="about__heading">history</h1>
        <Timeline />
      </div>
      <div className="about__skills">
        <h1 className="about__heading">What i Do</h1>
        <Skills />
      </div>
    </div>
  );
}
