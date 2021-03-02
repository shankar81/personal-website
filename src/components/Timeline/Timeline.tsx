import React from "react";
import "./Timeline.scss";

export default function Timeline() {
  const events = [
    {
      date: "JUNE 2019",
      title: "Codezen Tech Solutions, Goregaon",
      position: "React Native Developer",
      desc:
        "Developing cross-platform applications for android and IOS using React-Native. Developed applications and deployed to the playstore.",
    },
    {
      date: "DEC 2019",
      title: "Unbox Innovations, Vasai",
      position: "React Developer",
      desc:
        "Developing websites in React-Js. Developing cross-platform applications for android and IOS with Flutter and React-Native. Used firebase for realtime database.",
    },
    {
      date: "MAR 2020 - Present",
      title: "Oceans Technosys, Miraroad",
      position: "React Native Developer",
      desc:
        "Developing cross-platform applications for android and IOS using React-Native. Used firebase for notifications. Deployed to the playstore.",
    },
  ];
  return (
    <div className="timeline__container">
      <div className="timeline__line" />
      {events.map((el, index) => {
        const eventClasess = ["timeline__event"];
        const contentClasess = ["timeline__event--content"];
        const descClasess = ["timeline__event--desc"];
        const dotClasess = ["timeline__event--dot"];
        if (index % 2 !== 0) {
          // Reversed classes
          eventClasess.push("timeline__event--reversed");
          contentClasess.push("timeline__event--content--reversed");
          descClasess.push("timeline__event--desc--reversed");
          dotClasess.push("timeline__event--dot--reversed");
        }
        return (
          <div key={index} className={eventClasess.join(" ")}>
            <div className={dotClasess.join(" ")} />
            <div className={contentClasess.join(" ")}>
              <h2 className="timeline__event--heading">{el.date}</h2>
              <h2 className="timeline__event--title">{el.title}</h2>
              <h2 className="timeline__event--title">{el.position}</h2>
              {el.desc.split(".").map((sentence, i) => {
                return (
                  <h2 key={i} className={descClasess.join(" ")}>
                    {sentence}.
                  </h2>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
