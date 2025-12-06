"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./VideoGallery.module.scss";

const VideoGallery = ({ videos, title }) => {
  const [selectedVideo, setSelectedVideo] = useState(
    videos.length > 0 ? videos[0] : null
  );
  const [isPlaying, setIsPlaying] = useState(true);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef([]);
  const mainVideoRef = useRef(null);

  useEffect(() => {
    // Проверяем размер экрана после монтирования компонента
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Проверяем при монтировании
    checkIsMobile();

    // Добавляем слушатель изменения размера окна
    window.addEventListener("resize", checkIsMobile);

    // Убираем слушатель при размонтировании
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Эффект для автоматического воспроизведения видео при открытии аккордеона
  useEffect(() => {
    if (openAccordionIndex !== null) {
      const video = videoRefs.current[openAccordionIndex];
      if (video) {
        // Всегда устанавливаем muted для автовоспроизведения
        video.muted = true;

        // Небольшая задержка для плавности анимации открытия
        const timer = setTimeout(() => {
          video.play().catch((err) => {
            console.warn("Ошибка автоматического воспроизведения видео:", err);
            // Включаем контролы, чтобы пользователь мог запустить видео вручную
            video.controls = true;
          });
        }, 300);

        return () => clearTimeout(timer);
      }
    }
  }, [openAccordionIndex]);

  const handlePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch((err) => {
        console.warn("Ошибка воспроизведения видео:", err);
      });
      setIsPlaying(true);
    }
  };

  const toggleAccordion = (index) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);

      // При закрытии аккордеона сбрасываем все видео
      videoRefs.current.forEach((video, i) => {
        if (video) {
          video.pause();
          video.currentTime = 0; // Сбрасываем время воспроизведения
          video.muted = true; // Всегда оставляем звук отключенным
        }
      });
    } else {
      setOpenAccordionIndex(index);

      // Если открываем новый аккордеон, устанавливаем соответствующее видео
      setSelectedVideo(videos[index]);

      // Пауза всех других видео
      videoRefs.current.forEach((video, i) => {
        if (video && i !== index) {
          video.pause();
          video.currentTime = 0; // Сбрасываем время воспроизведения
          video.muted = true; // Всегда оставляем звук отключенным
        }
      });
    }
  };

  if (!selectedVideo) {
    return <p>Нет доступных видео.</p>;
  }

  return (
    <section className={styles.section} id="video-blog">
      <h1 className={styles.heading}>{title}</h1>
      <h5 className={styles.headingDescription}>Посмотрите наши видео</h5>

      {!isMobile ? (
        // Оригинальный макет для десктопов
        <div className={styles.gallery}>
          {/* Основное видео */}
          <div className={styles.mainVideoContainer}>
            <div className={styles.videoWrapper}>
              <video
                ref={mainVideoRef}
                src={`/video/${selectedVideo.link}`}
                muted
                className={`${styles.mainVideo} ${
                  isPlaying ? styles.playing : ""
                }`}
                poster={selectedVideo.thumbnail_url}
                controls
                preload="auto"
                aria-label={`Видео: ${selectedVideo.title}`}
              />
            </div>
            <h3 className={styles.videoTitle}>{selectedVideo.title}</h3>
            <p className={styles.videoDescription}>
              {selectedVideo.description}
            </p>
          </div>

          {/* Плейлист с миниатюрами */}
          <div className={styles.playlist}>
            {videos.map((video, index) => (
              <div
                key={index}
                className={`${styles.playlistItem} ${
                  selectedVideo === video ? styles.active : ""
                }`}
                onClick={() => {
                  setSelectedVideo(video);
                  if (mainVideoRef.current) {
                    mainVideoRef.current.load();
                  }
                }}
              >
                <img
                  src={video.thumbnail_url}
                  alt={video.title}
                  className={styles.thumbnail}
                />
                <div className={styles.textContent}>
                  <h4 className={styles.smallVideoTitle}>{video.title}</h4>
                  <p className={styles.smallVideoDuration}>
                    {video.description || "Описание отсутствует"}
                  </p>
                </div>
              </div>
            ))}

            <a
              href="#video-blog"
              className={styles.channelButton}
              aria-label="Просмотреть больше видео"
            >
              ПОСМОТРЕТЬ ЕЩЁ
            </a>
          </div>
        </div>
      ) : (
        // Аккордеон для мобильных устройств
        <div className={styles.accordion}>
          {videos.map((video, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                openAccordionIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordionIndex === index}
              >
                {/* Превью в заголовке аккордеона - скрывается при открытии */}
                {openAccordionIndex !== index && (
                  <img
                    src={video.thumbnail_url}
                    alt={video.title}
                    className={styles.accordionThumbnail}
                  />
                )}
                <div className={styles.accordionTitle}>
                  <h4>{video.title}</h4>
                  <span className={styles.accordionIcon}>
                    {openAccordionIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>

              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: openAccordionIndex === index ? "1000px" : "0",
                }}
              >
                <div className={styles.accordionVideoWrapper}>
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={`/video/${video.link}`}
                    className={styles.accordionVideo}
                    controls
                    preload="auto"
                    muted={true} // Всегда отключаем звук для аккордеонных видео
                    autoPlay={openAccordionIndex === index} // Автоматическое воспроизведение
                    playsInline // Для корректной работы на iOS
                    aria-label={`Видео: ${video.title}`}
                  />
                </div>
                <div className={styles.accordionTextContent}>
                  <h4 className={styles.accordionVideoTitle}>{video.title}</h4>
                  <p className={styles.accordionDescription}>
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
