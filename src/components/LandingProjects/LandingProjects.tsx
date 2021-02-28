import React from "react";
import Project from "../Project/Project";
import "./LandingProjects.scss";

interface Props {
  onOpenLightbox: () => void;
}

export default function LandingProjects(props: Props) {
  const images = [
    require("../../assets/images/beats_fitness.PNG").default,
    require("../../assets/images/beats_hub.PNG").default,
    require("../../assets/images/beats_events.PNG").default,
    require("../../assets/images/beats_store.PNG").default,
    require("../../assets/images/beats_cart.PNG").default,
  ];
  return (
    <div id="Products-section" className="landing-projects__container">
      <h1 className="landing-projects__heading">My Projects</h1>
      <div className="landing-projects__list">
        <Project
          onOpenLightbox={props.onOpenLightbox}
          thumbnail={require("../../assets/images/beats.png").default}
          images={images}
        />
        <Project
          onOpenLightbox={props.onOpenLightbox}
          thumbnail={require("../../assets/images/beats.png").default}
          images={images}
        />
        <Project
          onOpenLightbox={props.onOpenLightbox}
          thumbnail={require("../../assets/images/beats.png").default}
          images={images}
        />
        <Project
          onOpenLightbox={props.onOpenLightbox}
          thumbnail={require("../../assets/images/beats.png").default}
          images={images}
        />
      </div>
    </div>
  );
}
