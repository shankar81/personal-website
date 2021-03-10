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

    // Dragging image
    const draggable = document.getElementById("draggable");

    if (draggable) {
      draggable.addEventListener("mousedown", startDragging);
    }

    // Toggling scrollbar
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    const imgs = props.images.map((el, index) => {
      return { src: el, selected: index === 0 };
    });
    setImages(imgs);

    return () => {
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.images]);

  console.log(startMoving);

  function onSelectThumbnail(index: number) {
    if (images[index].selected) return;
    const i = [...images];
    i.map((el) => (el.selected = false));
    i[index].selected = true;

    setCurrentIndex(index);
    setImages([...i]);
    setCurrentScale(1);
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

  function startDragging() {
    const draggable = document.getElementById("draggable");
    draggable?.addEventListener("mousemove", dragging);
    draggable?.addEventListener("mouseup", stopDragging);
    draggable?.addEventListener("mouseout", stopDragging);
    setMoving(true);
    return false;
  }

  function dragging(e: MouseEvent) {
    e.preventDefault();
    // console.log(e.offsetX, e.clientX);
    const target = document.getElementById("draggable");
    if (target) {
      target.style.left = `${e.clientX - target.clientWidth / 2}px`;
      target.style.top = `${e.clientY - target.clientHeight / 3.5}px`;
    }
    return false;
  }

  console.log(currentScale);

  function stopDragging() {
    const draggable = document.getElementById("draggable");
    draggable?.removeEventListener("mousemove", dragging);
    draggable?.removeEventListener("mouseup", stopDragging);
    setMoving(false);
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
        id="draggable"
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
