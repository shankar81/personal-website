import React from "react";
import "./Timeline.scss";

export default function Timeline() {
  const events = [
    {
      date: "JUNE 2019",
      title: "Codezen Tech Solutions, Goregaon",
      position: "React Native Developer",
      desc:
        "Developing cross-platform applications for android and IOS using React-Native.",
    },
    {
      date: "DEC 2019",
      title: "Unbox Innovations, Vasai",
      position: "React Developer",
      desc:
        "Developing websites in React-Js. Developing cross-platform applications for android and IOS with Flutter and React-Native.",
    },
    {
      date: "MAR 2020 - Present",
      title: "Oceans Technosys, Miraroad",
      position: "React Native Developer",
      desc:
        "Developing cross-platform applications for android and IOS using React-Native.",
    },
  ];
  return (
    <div className="timeline__container">
      <div className="timeline__line" />
      {events.map((el, index) => {
        const eventClasess = ["timeline__event"];
        const contentClasess = ["timeline__event--content"];
        const descClasess = ["timeline__event--desc"];
        if (index % 2 !== 0) {
          // Reversed classes
          eventClasess.push("timeline__event--reversed");
          contentClasess.push("timeline__event--content--reversed");
          descClasess.push("timeline__event--desc--reversed");
        }
        return (
          <div key={index} className={eventClasess.join(" ")}>
            <div className="timeline__event--dot" />
            <div className={contentClasess.join(" ")}>
              <h2 className="timeline__event--heading">{el.date}</h2>
              <h2 className="timeline__event--title">{el.title}</h2>
              <h2 className="timeline__event--title">{el.position}</h2>
              <h2 className={descClasess.join(" ")}>{el.desc}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
