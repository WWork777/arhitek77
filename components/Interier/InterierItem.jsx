"use client";

import React, { useState, useEffect } from "react";
import "./InterierItem.scss";
import Gallery from "../Gallery/Gallery";

export default function InterierItem({ interierItem }) {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    if (interierItem && interierItem.images) {
      const galleryImages = interierItem.images.map(
        (img) => `/Interier/${interierItem.projectName}/${img}.webp`
      );
      setAllImages(galleryImages);
    }
  }, [interierItem]);

  if (!interierItem) {
    return <div>Проект не найден</div>;
  }

  if (!interierItem.images || !interierItem.projectName) {
    return <div>Неверный формат данных проекта</div>;
  }

  const handleImageClick = (img) => {
    const fullPath = `/Interier/${interierItem.projectName}/${img}.webp`;
    setFullscreenImage(fullPath);
    const index = allImages.findIndex((image) => image === fullPath);
    if (index !== -1) setCurrentImageIndex(index);
  };

  const closeFullscreen = (e) => {
    if (e.target.classList.contains("fullscreen-overlay")) {
      setFullscreenImage(null);
    }
  };

  const navigateImages = (direction) => {
    const newIndex =
      direction === "prev"
        ? currentImageIndex === 0
          ? allImages.length - 1
          : currentImageIndex - 1
        : currentImageIndex === allImages.length - 1
        ? 0
        : currentImageIndex + 1;

    setCurrentImageIndex(newIndex);
    setFullscreenImage(allImages[newIndex]);
  };

  return (
    <div className="item-container">
      <h1
        dangerouslySetInnerHTML={{
          __html: `${interierItem.title || "Название проекта"}`,
        }}
      ></h1>

      <Gallery
        images={interierItem.images}
        basePath={`/Interier/${interierItem.projectName}/`}
        onImageClick={handleImageClick}
      />

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <div className="fullscreen-content">
            <button
              className="nav-button prev"
              onClick={(e) => {
                e.stopPropagation();
                navigateImages("prev");
              }}
            >
              &lt;
            </button>
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="nav-button next"
              onClick={(e) => {
                e.stopPropagation();
                navigateImages("next");
              }}
            >
              &gt;
            </button>
            <button
              className="close-button"
              onClick={(e) => {
                e.stopPropagation();
                setFullscreenImage(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
