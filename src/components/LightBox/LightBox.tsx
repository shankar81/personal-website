import React, { useEffect, useState } from "react";
import "./LightBox.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

interface Props {
  onCloseLightbox: () => void;
}

export default function LightBox(props: Props) {
  const [images, setImages] = useState([
    {
      selected: true,
      src: require("../../assets/images/beats_fitness.PNG").default,
    },
    {
      selected: false,
      src: require("../../assets/images/beats_hub.PNG").default,
    },
    {
      selected: false,
      src: require("../../assets/images/beats_events.PNG").default,
    },
    {
      selected: false,
      src: require("../../assets/images/beats_store.PNG").default,
    },
    {
      selected: false,
      src: require("../../assets/images/beats_cart.PNG").default,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";

    return () => {
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    };
  }, []);

  function onSelectThumbnail(index: number) {
    if (images[index].selected) return;
    const i = [...images];
    i.map((el) => (el.selected = false));
    i[index].selected = true;

    setCurrentIndex(index);
    setImages([...i]);
  }

  function onChangeImage(index: number) {
    let currIndex = currentIndex + index;
    if (currentIndex + index < 0) {
      currIndex = images.length - 1;
    } else if (currentIndex + index > images.length - 1) {
      currIndex = 0;
    }
    setCurrentIndex(currIndex);
    onSelectThumbnail(currIndex);
  }

  return (
    <div className="lightbox__container">
      <div
        onClick={() => onChangeImage(-1)}
        className="lightbox__icon--container lightbox__icon--container--left"
      >
        <AiOutlineArrowLeft className="lightbox__icon" />
      </div>
      <img
        src={images[currentIndex].src}
        alt="Lightbox"
        className="lightbox__img"
      />
      <div
        onClick={() => onChangeImage(1)}
        className="lightbox__icon--container lightbox__icon--container--right"
      >
        <AiOutlineArrowRight className="lightbox__icon" />
      </div>
      <div
        onClick={props.onCloseLightbox}
        className="lightbox__icon--container lightbox__icon--container--close"
      >
        <IoMdClose className="lightbox__icon lightbox__icon--close" />
      </div>

      <div className="lightbox__thumbnails">
        {images.map((el, index) => {
          const thumbnailClasses = ["lightbox__thumbnail"];
          if (el.selected) {
            thumbnailClasses.push("lightbox__thumbnail--selected");
          }
          return (
            <img
              onClick={() => onSelectThumbnail(index)}
              key={index}
              src={el.src}
              alt="Lightbox-thumbnail"
              className={thumbnailClasses.join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}