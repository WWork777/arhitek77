"use client";

import { useState, useEffect } from "react";
import { PatternFormat } from "react-number-format";
import styles from "./QuizComponent.module.scss";

const QuizComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedFloors, setSelectedFloors] = useState(null);
  const [dimensions, setDimensions] = useState({ length: "", width: "" });
  const [selectedTiming, setSelectedTiming] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- DATA ---
  const technologies = [
    { id: "brus", name: "Брус", image: "/Quiz/brus.webp" },
    { id: "kleeniy-brus", name: "Клееный брус", image: "/Quiz/kleenbrus.webp" },
    { id: "gazobeton", name: "Газобетон", image: "/Quiz/gazobeton.webp" },
    { id: "kirpich", name: "Кирпич", image: "/Quiz/kirpich.webp" },
    {
      id: "zhelezobeton",
      name: "Сборно-монолитный железобетон",
      image: "/Quiz/monolit.webp",
    },
    {
      id: "fahverk",
      name: "Фахверковая технология",
      image: "/Quiz/fahwerk.webp",
    },
  ];

  const floorOptions = [
    { id: "1", name: "1 Этаж" },
    { id: "2", name: "2 Этажа" },
    { id: "2-mansarda", name: "2 Этажа (второй мансардный этаж)" },
    { id: "with-basement", name: "С цокольным этажом" },
    { id: "no-basement", name: "Без цокольного этажа" },
  ];

  const timingOptions = [
    { id: "this-month", name: "В этом месяце" },
    { id: "next-month", name: "Через месяц" },
    { id: "few-months", name: "Через несколько месяцев" },
    { id: "next-year", name: "В следующем году" },
  ];


  const isStepValid = (step) => {
    switch (step) {
      case 0:
        return selectedTech !== null;
      case 1:
        return selectedFloors !== null;
      case 2:
        return (
          dimensions.length &&
          dimensions.width &&
          parseFloat(dimensions.length) > 0 &&
          parseFloat(dimensions.width) > 0
        );
      case 3:
        return selectedTiming !== null;
      case 4:
        // финальный шаг всегда доступен: пользователь сам пишет в WhatsApp
        return formData.name.trim() !== "" && formData.phone.trim() !== "";
      default:
        return false;
    }
  };


  // --- NAV ---
  const handleNext = () => {
    if (currentStep < 4 && isStepValid(currentStep)) {
      setCurrentStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  // --- INPUT HANDLERS ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDimensions((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (formData.phone.includes("_") || formData.phone === "") {
      setStatus("Пожалуйста, введите корректный номер телефона");
      return;
    }
    setIsSubmitting(true);
    setStatus("");

    const tech = technologies.find((t) => t.id === selectedTech)?.name || "Не указано";
    const floors = floorOptions.find((f) => f.id === selectedFloors)?.name || "Не указано";
    const timing = timingOptions.find((t) => t.id === selectedTiming)?.name || "Не указано";
    const size = dimensions.length && dimensions.width
      ? `${dimensions.length}м x ${dimensions.width}м`
      : "Не указано";

    const details = `🏠 Технология: ${tech}\n🏢 Этажность: ${floors}\n📏 Размеры: ${size}\n⏳ Сроки: ${timing}`;

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, details, phone: formData.phone ? `+7${formData.phone}` : ""}),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Заявка успешно отправлена!");
        alert("Заявка успешно отправлена!");
        setFormData({ name: "", phone: "" });
        
        setTimeout(() => {
           setCurrentStep(0);
           setSelectedTech(null);
           setSelectedFloors(null);
           setDimensions({ length: "", width: "" });
           setSelectedTiming(null);
           setStatus("");
        }, 3000);
      } else {
        setStatus("Ошибка при отправке. Попробуйте снова.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Ошибка при отправке. Попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- AUTOPROCEED ---
  useEffect(() => {
    if (currentStep === 0 && selectedTech) handleNext();
  }, [selectedTech, currentStep]);

  useEffect(() => {
    if (currentStep === 1 && selectedFloors) handleNext();
  }, [selectedFloors, currentStep]);

  useEffect(() => {
    if (currentStep === 3 && selectedTiming) handleNext();
  }, [selectedTiming, currentStep]);

  return (
    <>
      <div className={styles.quizHeader}>
        <h1>
          Расчет стоимости <b>строительства дома</b>
        </h1>
      </div>

      <div className={styles.quizContainer}>
        {/* Шаг 1: Технология */}
        <div
          className={`${styles.quizStep} ${
            currentStep === 0 ? styles.active : ""
          }`}
        >
          <div className={styles.stepTitle}>
            По какой технологии вы хотите построить дом?
          </div>
          <div className={styles.techOptions}>
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className={`${styles.techOption} ${
                  selectedTech === tech.id ? styles.selected : ""
                }`}
                onClick={() => setSelectedTech(tech.id)}
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  className={styles.techImage}
                />
                <div className={styles.techName}>{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Шаг 2: Этажность */}
        <div
          className={`${styles.quizStep} ${
            currentStep === 1 ? styles.active : ""
          }`}
        >
          <div className={styles.stepTitle}>Укажите количество этажей</div>
          <div className={styles.floorOptions}>
            {floorOptions.map((option) => (
              <div
                key={option.id}
                className={`${styles.floorOption} ${
                  selectedFloors === option.id ? styles.selected : ""
                }`}
                onClick={() => setSelectedFloors(option.id)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>

        {/* Шаг 3: Размеры */}
        <div
          className={`${styles.quizStep} ${
            currentStep === 2 ? styles.active : ""
          }`}
        >
          <div className={styles.stepTitle}>Укажите размеры дома (м)</div>
          <div className={styles.sizeInputs}>
            <div className={styles.sizeInputRow}>
              <span className={styles.sizeLabel}>Длина</span>
              <input
                type="number"
                name="length"
                min="1"
                step="0.1"
                value={dimensions.length}
                onChange={handleInputChange}
                className={styles.sizeField}
              />
            </div>
            <div className={styles.sizeInputRow}>
              <span className={styles.sizeLabel}>Ширина</span>
              <input
                type="number"
                name="width"
                min="1"
                step="0.1"
                value={dimensions.width}
                onChange={handleInputChange}
                className={styles.sizeField}
              />
            </div>
          </div>
        </div>

        {/* Шаг 4: Сроки */}
        <div
          className={`${styles.quizStep} ${
            currentStep === 3 ? styles.active : ""
          }`}
        >
          <div className={styles.stepTitle}>
            Когда планируете начать строительство?
          </div>
          <div className={styles.timingOptions}>
            {timingOptions.map((option) => (
              <div
                key={option.id}
                className={`${styles.timingOption} ${
                  selectedTiming === option.id ? styles.selected : ""
                }`}
                onClick={() => setSelectedTiming(option.id)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>

        {/* Шаг 5: Контактные данные + WhatsApp */}
        <div
          className={`${styles.quizStep} ${
            currentStep === 4 ? styles.active : ""
          }`}
        >
          <div className={styles.stepTitle}>
            Оставьте контакты для получения расчета
          </div>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label>Имя</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                placeholder="Ваше имя"
              />
            </div>
            <div className={styles.formGroup}>
              <label>Телефон</label>
              <PatternFormat
                format="+7 (###) ###-##-##"
                mask="_"
                name="phone"
                value={formData.phone}
                allowEmptyFormatting={true}
                onValueChange={(values) => {
                  setFormData((prev) => ({
                    ...prev,
                    phone: values.value, // сохраняем только цифры без +7
                  }));
                }}
                // Чтобы не слетал фокус и работали стили
                className="phone-input"
                autoComplete="tel"
                required
                placeholder=""
              />
            </div>
            <p className={styles.privacyText}>
              Нажимая на кнопку, вы соглашаетесь с{" "}
              <a href="#" data-bs-toggle="modal" data-bs-target="#сonfidentiality">
                политикой конфиденциальности
              </a>
            </p>
            {status && (
              <p style={{ textAlign: "center", color: status.includes("успешно") ? "green" : "red", marginTop: "10px" }}>
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Навигация */}
        <div className={styles.quizNavigation}>
          <button
          type="button"
            className={`${styles.quizBtn} ${styles.back}`}
            onClick={handleBack}
            disabled={currentStep === 0 || isSubmitting}
          >
            Назад
          </button>

          {currentStep === 2 && (
            <button
            type="button"
              className={styles.quizBtn}
              onClick={handleNext}
              disabled={!isStepValid(2)}
            >
              Далее
            </button>
          )}

          {currentStep === 4 && (
            <button
              type="submit"
              className={styles.quizBtn}
              onClick={handleSubmit}
              disabled={!isStepValid(4) || isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Получить расчет"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizComponent;
