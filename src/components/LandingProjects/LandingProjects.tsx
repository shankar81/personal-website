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
    require("../../assets/images/beats_fitness.PNG").default,
    require("../../assets/images/beats_hub.PNG").default,
    require("../../assets/images/beats_events.PNG").default,
    require("../../assets/images/beats_store.PNG").default,
    require("../../assets/images/beats_cart.PNG").default,
    require("../../assets/images/beats_fitness.PNG").default,
    require("../../assets/images/beats_hub.PNG").default,
    require("../../assets/images/beats_events.PNG").default,
    require("../../assets/images/beats_store.PNG").default,
    require("../../assets/images/beats_cart.PNG").default,
    require("../../assets/images/beats_fitness.PNG").default,
    require("../../assets/images/beats_hub.PNG").default,
    require("../../assets/images/beats_events.PNG").default,
    require("../../assets/images/beats_store.PNG").default,
    require("../../assets/images/beats_cart.PNG").default,
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

  const alarmManager = [
    require("../../assets/images/alarm1.png").default,
    require("../../assets/images/alarm2.png").default,
    require("../../assets/images/alarm3.png").default,
    require("../../assets/images/alarm4.png").default,
    require("../../assets/images/alarm5.png").default,
  ];

  const newsApp = [
    require("../../assets/images/news1.jpg").default,
    require("../../assets/images/news2.jpg").default,
    require("../../assets/images/news3.jpg").default,
    require("../../assets/images/news4.jpg").default,
    require("../../assets/images/news5.jpg").default,
  ];

  const tinderr = [
    require("../../assets/images/tinder1.jpg").default,
    require("../../assets/images/tinder2.jpg").default,
    require("../../assets/images/tinder3.jpg").default,
    require("../../assets/images/tinder4.jpg").default,
    require("../../assets/images/tinder5.jpg").default,
    require("../../assets/images/tinder6.jpg").default,
    require("../../assets/images/tinder7.jpg").default,
    require("../../assets/images/tinder8.jpg").default,
    require("../../assets/images/tinder9.jpg").default,
    require("../../assets/images/tinder10.jpg").default,
    require("../../assets/images/tinder11.jpg").default,
    require("../../assets/images/tinder12.jpg").default,
  ];
  return (
    <div id="Products-section" className="landing-projects__container">
      <h1 className="landing-projects__heading">My Projects</h1>
      <div className="landing-projects__list">
        <Project
          tech={require("../../assets/icons/languages/react-js.png").default}
          link="https://play.google.com/store/apps/details?id=com.beats_react_native"
          height="18%"
          onOpenLightbox={() => props.onOpenLightbox(beats)}
          thumbnail={require("../../assets/images/beats.png").default}
        />
        <Project
          tech={require("../../assets/icons/languages/react-js.png").default}
          link="https://play.google.com/store/apps/details?id=com.wingsudaan"
          height="50%"
          onOpenLightbox={() => props.onOpenLightbox(wings)}
          thumbnail={require("../../assets/images/aaaina.png").default}
        />
        <Project
          tech={require("../../assets/icons/languages/kotlin.png").default}
          link="https://github.com/shankar81/Tinderr"
          height="50%"
          onOpenLightbox={() => props.onOpenLightbox(tinderr)}
          thumbnail={require("../../assets/images/tinder_icon.png").default}
        />
        <Project
          link="https://github.com/shankar81/music_player_kotlin"
          tech={require("../../assets/icons/languages/kotlin.png").default}
          height="18%"
          title="Music Player"
          onOpenLightbox={() => props.onOpenLightbox(musicPlayer)}
          />
        <Project
          link="https://github.com/shankar81/NewsApp"
          height="18%"
          tech={require("../../assets/icons/languages/kotlin.png").default}
          onOpenLightbox={() => props.onOpenLightbox(newsApp)}
          title="News Application"
        />
        <Project
          link="https://github.com/shankar81/AlarmManager"
          height="18%"
          tech={require("../../assets/icons/languages/kotlin.png").default}
          onOpenLightbox={() => props.onOpenLightbox(alarmManager)}
          title="Alarm Manager"
        />
      </div>
      <PrimaryButton
        openInNewTab={true}
        label="View More"
        link="https://github.com/shankar81"
      />
    </div>
  );
}
