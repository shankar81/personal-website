import React from "react";
import "./Project.scss";
import { IoIosImages } from "react-icons/io";

interface Props {
  thumbnail: string;
  images: string[];
}

export default function Project(props: Props) {
  return (
    <div className="project__container">
      <img
        src={props.thumbnail}
        alt="Project"
        className="project__image"
      />

      <div className="project__actions">
        <IoIosImages className="project__actions--gallery" />
        <button className="project__actions--detail">explore</button>
      </div>
    </div>
  );
}
