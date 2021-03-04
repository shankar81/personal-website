import React from "react";
import "./Skill.scss";

interface Props {
  title: string;
  image: string;
}

export default function Skill(props: Props) {
  return (
    <div className="skill__container">
      <img src={props.image} alt="" className="skill__image" />
      <h4 className="skill__title">{props.title}</h4>
    </div>
  );
}
