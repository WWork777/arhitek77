"use client";
import { PatternFormat } from "react-number-format";
import "./ModalForm.scss";
import { useState, useEffect } from "react";

export default function ProjectModalForm() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalTitle, setModalTitle] = useState("Узнать стоимость строительства");

  useEffect(() => {
    const modalElement = document.getElementById("exampleModa2");
    if (!modalElement) return;

    const handleShow = (event) => {
      const button = event.relatedTarget;
      const title = button?.getAttribute("data-bs-title");
      if (title) {
        setModalTitle(title);
      } else {
        setModalTitle("Узнать стоимость строительства");
      }
    };

    modalElement.addEventListener("show.bs.modal", handleShow);
    return () => modalElement.removeEventListener("show.bs.modal", handleShow);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.includes("_") || formData.phone === "") {
      setStatus("Пожалуйста, введите корректный номер телефона");
      return;
    }

    setIsSubmitting(true);
    alert("Заявка успешно отправлена!");
    setStatus("");

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          // Добавляем +7 перед отправкой, если номер введен
          phone: formData.phone ? `+7${formData.phone}` : ""
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Заявка успешно отправлена!");
        setFormData({ name: "", phone: "" });

        setTimeout(() => {
          const modal = bootstrap.Modal.getInstance(
            document.getElementById("exampleModal")
          );
          modal?.hide();
          setStatus("");
        }, 3000); // Закрыть модалку через 3 секунды
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

  return (
    <>
      <div
        className="modal fade"
        id="exampleModa2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabe2"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="project-modal-title fs-5" id="exampleModalLabe2">
                {modalTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-form">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <span className="bar"></span>
                    <label>Имя</label>
                  </div>
                  <div className="group">
                    <PatternFormat
                        format="+7 (###) ###-##-##"
                        mask="_"
                        name="phone"
                        value={formData.phone}
                        allowEmptyFormatting={true}
                        // Используем onValueChange правильно
                        onValueChange={(values) => {
                          setFormData((prev) => ({
                            ...prev,
                            phone: values.value, // сохраняем красивый отформатированный номер
                          }));
                        }}
                        // Чтобы не слетал фокус и работали стили
                        className="phone-input" 
                        autoComplete="tel"
                        required
                        placeholder=""
                      />
                    <span className="bar"></span>
                    <label>Телефон</label>
                  </div>
                  <span className="conf">
                    Нажимая на кнопку “отправить заявку”, я соглашаюсь с
                    условиями{" "}
                    <a
                      href="/docs/ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ АРХИТЕК 77.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      политики конфиденциальности
                    </a>
                  </span>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Закрыть
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {isSubmitting ? "Отправка..." : "Отправить"}
                  </button>
                </div>
              </form>
              {status && <p className="form-message">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
