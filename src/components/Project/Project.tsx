import React from "react";
import "./Project.scss";
import { IoIosImages } from "react-icons/io";

export default function Project() {
  return (
    <div className="project__container">
      <img
        src={require("../../assets/images/beats.png").default}
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
