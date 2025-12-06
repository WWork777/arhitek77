"use client";

import React from "react";

export default function Gallery({ images, basePath = "", onImageClick }) {
  if (!images || images.length === 0) return null;

  return (
    <div className={`gallery gallery-${images.length}`}>
      {images.map((imgName, index) => {
        if (images.length === 5) {
          if (index === 4) return null;

          if (index === 3) {
            return (
              <div key={index} className="gallery-item double-item">
                <img
                  src={`${basePath}${imgName}.webp`}
                  alt={`Изображение ${index + 1}`}
                  loading="lazy"
                  onClick={() => onImageClick(imgName)}
                />
                <img
                  src={`${basePath}${images[4]}.webp`}
                  alt={`Изображение ${index + 2}`}
                  loading="lazy"
                  onClick={() => onImageClick(images[4])}
                />
              </div>
            );
          }
        }

        return (
          <div
            key={index}
            className="gallery-item"
            onClick={() => onImageClick(imgName)}
          >
            <img
              src={`${basePath}${imgName}.webp`}
              alt={`Изображение ${index + 1}`}
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}
