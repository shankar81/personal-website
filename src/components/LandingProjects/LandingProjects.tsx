import React from "react";
import Project from "../Project/Project";
import './LandingProjects.scss'

export default function LandingProjects() {
  return (
    <div className="landing-projects__container">
      <h1 className="landing-projects__heading">My Projects</h1>
      <div className="landing-projects__list">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
