"use client";
import styles from "./Catalog.module.scss";
import sliderStyles from "./Slider.module.scss";
import React, { useState, useEffect } from "react";
import { FiSearch, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function CatalogPage({ showAll = false }) {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  useEffect(() => {
    fetch("/data/GaleryCatalog.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const initialArticles = showAll ? data : data.slice(0, 6);
        setArticles(initialArticles);
        setFilteredArticles(initialArticles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, [showAll]);

  const openSlider = (index) => {
    setCurrentSlide(index);
    setIsSliderOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? filteredArticles.length - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === filteredArticles.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.blog}>
        {/* <h1 className={styles.title}>Галерея проектов</h1> */}

        <div className={styles.articlesContainer}>
          {filteredArticles.map((article, index) => (
            <div
              key={article.id}
              className={styles.articleCardLink}
              onClick={() => openSlider(index)}
            >
              <div className={styles.articleCard}>
                <img
                  src={`/Galery/${article.src}.webp`}
                  alt={article.projectName}
                  className={styles.articleImage}
                />
                <div className={styles.contentOverlay}>
                  <h4 className={styles.overlayTitle}>Подробнее</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isSliderOpen && (
        <div className={sliderStyles.overlay}>
          <button className={sliderStyles.closeButton} onClick={closeSlider}>
            <FiX size={24} />
          </button>

          <div className={sliderStyles.sliderContainer}>
            <button
              className={`${sliderStyles.arrow} ${sliderStyles.prev}`}
              onClick={goToPrevSlide}
            >
              <FiChevronLeft size={32} />
            </button>

            <div className={sliderStyles.sliderContent}>
              <div className={sliderStyles.sliderImage}>
                <img
                  src={`/Galery/${filteredArticles[currentSlide]?.src}.webp`}
                  alt={filteredArticles[currentSlide]?.projectName}
                  className={sliderStyles.slideImage}
                />
              </div>
              <div className={sliderStyles.sliderInfo}>
                <h2 className={sliderStyles.slideTitle}>
                  {filteredArticles[currentSlide]?.title}
                </h2>
                <p className={sliderStyles.slideDescription}>
                  {filteredArticles[currentSlide]?.description ||
                    "Описание проекта отсутствует"}
                </p>
                <p className={sliderStyles.slidePrice}>
                  Цена: {filteredArticles[currentSlide]?.price || "не указана"}
                </p>
              </div>
            </div>

            <button
              className={`${sliderStyles.arrow} ${sliderStyles.next}`}
              onClick={goToNextSlide}
            >
              <FiChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CatalogPage;
