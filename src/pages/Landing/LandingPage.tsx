import React, { useContext, useState } from "react";
import Hero from "../../components/Hero/Hero";
import LandingProjects from "../../components/LandingProjects/LandingProjects";
import LightBox from "../../components/LightBox/LightBox";
import "./Landing.scss";
import { GlobalContext } from "../../utils/GlobalContext";

interface Props {}

export default function LandingPage(props: Props) {
  const context = useContext(GlobalContext);

  const [openLightbox, setOpenLightbox] = useState(false);
  const [images, setImages] = useState([""]);

  function onOpenLightbox(images: string[]) {
    setImages([...images]);
    setOpenLightbox(true);
    context.onToggleBackdrop(true);
  }

  function onCloseLightbox() {
    setOpenLightbox(false);
    context.onToggleBackdrop(false);
  }

  return (
    <div className="landing__container">
      <Hero />
      <LandingProjects onOpenLightbox={onOpenLightbox} />
      {openLightbox && (
        <LightBox images={images} onCloseLightbox={onCloseLightbox} />
      )}
    </div>
  );
}
