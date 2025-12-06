"use client";
import { useMemo } from "react";
import "./BlogHero.scss";

export default function Hero({
  backgroundSrc = "/Home/video.mp4",
  title = "Строительство домов под ключ",
  description = "ОПЫТ БОЛЕЕ 25 ЛЕТ",
  buttonName = "Узнать стоимость",
  buttonType = "default"
}) {
  const backgroundType = useMemo(() => {
    if (!backgroundSrc) return "video";
    const extension = backgroundSrc.split(".").pop().toLowerCase();
    return ["mp4", "webm", "ogg"].includes(extension) ? "video" : "image";
  }, [backgroundSrc]);

  const buttonAttributes = buttonType === "default" 
    ? { 
        "data-bs-toggle": "modal", 
        "data-bs-target": "#exampleModal" 
      }
    : { 
        "data-bs-toggle": "modal", 
        "data-bs-target": "#exampleModa2" 
      };

  return (
    <div className="blog-hero">
      {backgroundType === "video" ? (
        <video className="blog-hero-video" autoPlay muted playsInline loop>
          <source src={backgroundSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="blog-hero-image" style={{ backgroundImage: `url(${backgroundSrc})` }} />
      )}

      <div className="hero-content">
        <div className="slogan">
          <div className="slogan-bottom">
            <h1 className="text-white">{title}</h1>
          </div>
          <div className="slogan-bottom">
            <h2 className="experience">{description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}