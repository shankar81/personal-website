import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Project from "../Project/Project";
import "./LandingProjects.scss";

interface Props {
  onOpenLightbox: (images: string[]) => void;
}

export default function LandingProjects(props: Props) {
  const beats = [
    require("../../assets/images/beats_fitness.PNG").default,
    require("../../assets/images/beats_hub.PNG").default,
    require("../../assets/images/beats_events.PNG").default,
    require("../../assets/images/beats_store.PNG").default,
    require("../../assets/images/beats_cart.PNG").default,
  ];

  const wings = [
    require("../../assets/images/wings1.png").default,
    require("../../assets/images/wings2.png").default,
    require("../../assets/images/wings3.jpg").default,
    require("../../assets/images/wings4.png").default,
    require("../../assets/images/wings5.jpg").default,
  ];

  const musicPlayer = [
    require("../../assets/images/music1.png").default,
    require("../../assets/images/music2.png").default,
    require("../../assets/images/music3.png").default,
    require("../../assets/images/music4.png").default,
    require("../../assets/images/music5.png").default,
    require("../../assets/images/music6.png").default,
  ];
  return (
    <div id="Products-section" className="landing-projects__container">
      <h1 className="landing-projects__heading">My Projects</h1>
      <div className="landing-projects__list">
        <Project
          tech={
            require("../../assets/icons/languages/react-js.png").default
          }
          link="https://play.google.com/store/apps/details?id=com.beats_react_native"
          height="18%"
          onOpenLightbox={() => props.onOpenLightbox(beats)}
          thumbnail={require("../../assets/images/beats.png").default}
        />
        <Project
          tech={
            require("../../assets/icons/languages/react-js.png").default
          }
          link="https://play.google.com/store/apps/details?id=com.wingsudaan"
          height="50%"
          onOpenLightbox={() => props.onOpenLightbox(wings)}
          thumbnail={require("../../assets/images/aaaina.png").default}
        />
        <Project
          link="https://github.com/shankar81/music_player_kotlin"
          tech={
            require("../../assets/icons/languages/kotlin.png").default
          }
          height="18%"
          onOpenLightbox={() => props.onOpenLightbox(musicPlayer)}
          thumbnail={require("../../assets/images/beats.png").default}
        />
        <Project
          link="https://github.com/shankar81/NewsApp"
          height="18%"
          tech={
            require("../../assets/icons/languages/react-js.png").default
          }
          onOpenLightbox={() => props.onOpenLightbox(beats)}
          thumbnail={require("../../assets/images/beats.png").default}
        />
      </div>
      <PrimaryButton label="View More" link="https://github.com/shankar81" />
    </div>
  );
}
