import React from "react";
import Skill from "../Skill/Skill";
import './Skills.scss'

export default function Skills() {
  const skills = [
    {
      title: "Kotlin",
      icon: require("../../assets/icons/languages/kotlin.png").default,
    },
    {
      title: "Core Java",
      icon: require("../../assets/icons/languages/java.png").default,
    },
    {
      title: "Javascript",
      icon: require("../../assets/icons/languages/javascript.png").default,
    },
    {
      title: "HTML",
      icon: require("../../assets/icons/languages/html.png").default,
    },
    {
      title: "CSS",
      icon: require("../../assets/icons/languages/css.png").default,
    },
    {
      title: "SCSS",
      icon: require("../../assets/icons/languages/sass.png").default,
    },
    {
      title: "React Js",
      icon: require("../../assets/icons/languages/react-js.png").default,
    },
    {
      title: "React Native",
      icon: require("../../assets/icons/languages/react-native.png").default,
    },
    {
      title: "Node Js",
      icon: require("../../assets/icons/languages/node-js.png").default,
    },
    {
      title: "Mongo DB",
      icon: require("../../assets/icons/languages/mongo.png").default,
    },
    {
      title: "MySQL",
      icon: require("../../assets/icons/languages/mysql.png").default,
    },
    {
      title: "Github",
      icon: require("../../assets/icons/languages/github.png").default,
    },
    {
      title: "Android Development",
      icon: require("../../assets/icons/languages/android.png").default,
    },
  ];
  return (
    <div className="skills__container">
      <p className="skills__para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nisi
        eius eaque dolore? Neque itaque incidunt maxime temporibus soluta
        laborum consequatur, magnam doloribus eaque consectetur blanditiis
        repellat sit! Facere, voluptatum!
      </p>
      <div className="skills__list">
        {skills.map((el, index) => {
          return <Skill key={index} title={el.title} image={el.icon} />;
        })}
      </div>
    </div>
  );
}
