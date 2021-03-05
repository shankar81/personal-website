import React from "react";
import "./Project.scss";
import { IoIosImages } from "react-icons/io";

interface Props {
  thumbnail: string;
  height: string;
  tech: string;
  link: string;
  onOpenLightbox: () => void;
}

export default function Project(props: Props) {
  return (
    <div className="project__container">
      <img
        style={{ height: props.height }}
        src={props.thumbnail}
        alt="Project"
        className="project__image"
      />

      <div className="project__actions">
        <IoIosImages
          onClick={props.onOpenLightbox}
          className="project__actions--gallery"
        />
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer nofollow"
          className="project__actions--detail"
        >
          explore
        </a>
      </div>

      <img src={props.tech} alt="tech" className="project__tech" />
    </div>
  );
}
