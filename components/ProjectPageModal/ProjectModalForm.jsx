"use client";
import "./ModalForm.scss";
import { useState } from "react";

export default function ProjectModalForm() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
              <h1 className="project-modal-title fs-5" id="exampleModalLabe2" style={{marginLeft:'25%'}}>
              Узнать стоимость стоительства
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
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      // placeholder="+7 (999) 999-99-99"
                      pattern="\+7\s?\(?9\d{2}\)?\s?\d{3}-?\d{2}-?\d{2}"
                      required
                    />
                    <span className="bar"></span>
                    <label>Телефон</label>
                  </div>
                  <span className="conf">
                    Нажимая на кнопку “отправить заявку”, я соглашаюсь с
                    условиями{" "}
                    <a
                      href="#"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#сonfidentiality"
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
