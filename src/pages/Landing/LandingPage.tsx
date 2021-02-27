import React from "react";
import Hero from "../../components/Hero/Hero";
import LandingProjects from "../../components/LandingProjects/LandingProjects";
import classes from "./Landing.module.scss";

export default function LandingPage() {
  return (
    <div className={classes.container}>
      <Hero />
      <LandingProjects />
    </div>
  );
}
