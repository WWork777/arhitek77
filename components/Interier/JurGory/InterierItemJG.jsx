"use client";

import React, { useState, useEffect } from "react";
import "./InterierItemJG.scss";

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

  const handleImageClick = (img, index) => {
    const fullPath = `/Interier/${interierItem.projectName}/${img}.webp`;
    setFullscreenImage(fullPath);
    setCurrentImageIndex(index);
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

  // Разбиваем изображения на ряды
  const rows = [];
  const images = [...interierItem.images];
  
  // Первые 4 ряда по 2 изображения
  for (let i = 0; i < 4; i++) {
    if (images.length > 0) {
      rows.push(images.splice(0, 2));
    }
  }
  
  // Последний ряд - оставшиеся изображения (4 шт)
  if (images.length > 0) {
    rows.push(images);
  }

  return (
    <div className="item-container">
      <h1
        dangerouslySetInnerHTML={{
          __html: `${interierItem.title || "Название проекта"}`,
        }}
      ></h1>

      <div className="custom-gallery">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`gallery-row row-${rowIndex}`}>
            {row.map((img, imgIndex) => (
              <div 
                key={imgIndex} 
                className="gallery-item"
                onClick={() => handleImageClick(img, rowIndex * 2 + imgIndex)}
              >
                <img
                  src={`/Interier/${interierItem.projectName}/${img}.webp`}
                  alt={`Фото проекта ${rowIndex * 2 + imgIndex + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

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