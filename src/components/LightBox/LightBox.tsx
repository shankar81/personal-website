import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import "./LightBox.scss";

interface LightBoxImage {
  selected: boolean;
  src: string;
}
interface Props {
  onCloseLightbox: () => void;
  images: string[];
}

export default function LightBox(props: Props) {
  const [images, setImages] = useState<LightBoxImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScale, setCurrentScale] = useState(1);
  const [startMoving, setMoving] = useState(false);

  useEffect(() => {
    // Track scroll events
    document.addEventListener("wheel", (event) => {
      const { deltaY } = event;
      if (deltaY > 0) {
        setCurrentScale((scale) => (scale <= 1 ? 1 : scale - 0.1));
      } else {
        setCurrentScale((scale) => (scale >= 3 ? 3 : scale + 0.1));
      }
    });

    // window.addEventListener("mousemove", (e) => {
    //   if (startMoving) {
    //
    //   }
    // });

    // window.addEventListener("mousedown", () => setMoving(true));

    // window.addEventListener("mouseup", () => setMoving(false));

    // Toggling scrollbar
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    const imgs = props.images.map((el, index) => {
      return { src: el, selected: index === 0 };
    });
    setImages(imgs);

    return () => {
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    };
  }, [props.images, startMoving]);

  function onSelectThumbnail(index: number) {
    if (images[index].selected) return;
    const i = [...images];
    i.map((el) => (el.selected = false));
    i[index].selected = true;

    setCurrentScale(1);
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
        style={{ transform: `scale(${currentScale})` }}
        src={images[currentIndex]?.src}
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
