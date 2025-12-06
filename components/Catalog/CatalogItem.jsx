"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./CatalogItem.scss";
import Gallery from "../Gallery/Gallery";
import PlanGallery from "./PlanGalery";
import Hero from "../Home/Hero/Hero";
import Consultation from "../Consultation/Consultation";
import { useRouter } from "next/navigation";

export default function CatalogItem({ catalogItem }) {
  const router = useRouter();
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);
  const [activeTab, setActiveTab] = useState("description");

  const [buyFormData, setBuyFormData] = useState({
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmittingBuy, setIsSubmittingBuy] = useState(false);
  const [buyStatus, setBuyStatus] = useState(null);

  useEffect(() => {
    if (catalogItem) {
      const galleryImages = catalogItem.images.map(
        (img) => `/Catalog/${catalogItem.projectName}/${img}.webp`
      );
      const planImages = catalogItem.plans.map(
        (img) => `/Catalog/${catalogItem.projectName}/${img}.webp`
      );
      setAllImages([...galleryImages, ...planImages]);
    }
  }, [catalogItem]);

  const handleBuyFormChange = (e) => {
    const { name, value } = e.target;
    setBuyFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBuyFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingBuy(true);
    setBuyStatus(null);

    try {
      const response = await fetch("/api/buy-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...buyFormData,
          projectName: catalogItem.title,
        }),
      });

      if (response.ok) {
        setBuyStatus("success");
        setBuyFormData({ phone: "", email: "", message: "" });
      } else {
        throw new Error("Ошибка при отправке");
      }
    } catch (error) {
      console.error(error);
      setBuyStatus("error");
    } finally {
      setIsSubmittingBuy(false);
    }
  };

  if (!catalogItem) {
    return <div>Проект не найден</div>;
  }

  const handleImageClick = (img, isPlan = false) => {
    const fullPath = `/Catalog/${catalogItem.projectName}/${img}.webp`;
    setFullscreenImage(fullPath);

    const index = allImages.findIndex((image) => image === fullPath);
    if (index !== -1) {
      setCurrentImageIndex(index);
    }
  };

  const closeFullscreen = (e) => {
    if (e.target.classList.contains("fullscreen-overlay")) {
      setFullscreenImage(null);
    }
  };

  const navigateImages = (direction) => {
    let newIndex;
    if (direction === "prev") {
      newIndex =
        currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1;
    } else {
      newIndex =
        currentImageIndex === allImages.length - 1 ? 0 : currentImageIndex + 1;
    }
    setCurrentImageIndex(newIndex);
    setFullscreenImage(allImages[newIndex]);
  };

  const getCharacteristicsData = () => {
    const { specifications } = catalogItem;
    const allCharacteristics = [
      { name: "Общая площадь", value: `${specifications.totalArea} м²` },
      {
        name: "Жилая площадь",
        value: `${specifications.areaOfTheResidential} м²`,
      },
      { name: "Прочие площади", value: `${specifications.otherArea} м²` },
      { name: "Габариты дома", value: specifications.sizeOfHouse },
      { name: "Этажность", value: specifications.floors },
      { name: "Спальни", value: specifications.bedrooms },
      { name: "Машиноместа", value: specifications.garagePlaces },
      {
        name: "Материал стен (1 этаж)",
        value: specifications.wallMaterialOnTheFirstFloor,
      },
      specifications.floors === "2" && {
        name: "Материал стен (2 этаж)",
        value: specifications.wallMaterialOnTheSecondFloor,
      },
      { name: "Тип фундамента", value: specifications.foundationType },
      { name: "Тип перекрытий", value: specifications.TypeOfOverlap },
      { name: "Утепление", value: specifications.insulation },
      { name: "Кровля", value: specifications.roof },
      { name: "Окна", value: specifications.windows },
      { name: "Входная дверь", value: specifications.frontDoor },
      { name: "Отделка", value: specifications.finishing },
    ].filter(Boolean);

    return allCharacteristics;
  };

  return (
    <>
      <Hero
        backgroundSrc={`/Catalog/${catalogItem.projectName}/${catalogItem.projectName}.webp`}
        title={catalogItem.title}
        description={
          <>
            Площадь дома: {catalogItem.specifications.totalArea} м² Размеры
            дома: {catalogItem.specifications.sizeOfHouse} Количество спален:{" "}
            {catalogItem.specifications.bedrooms} шт
            <br />
            Архитектор: {catalogItem.arhitektor}
          </>
        }
        buttonName="УЗНАТЬ СТОИМОСТЬ"
        buttonType="secondary"
      />

      <div className="item-container">
        <Gallery
          images={catalogItem.images}
          basePath={`/Catalog/${catalogItem.projectName}/`}
          onImageClick={handleImageClick}
        />

        <h2 className="project-plan">
          ПЛАНИРОВОЧНОЕ <span>РЕШЕНИЕ</span>
        </h2>

        <PlanGallery
          images={catalogItem.plans}
          basePath={`/Catalog/${catalogItem.projectName}/`}
          onImageClick={(img) => handleImageClick(img, true)}
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
      <Consultation />
    </>
  );
}
