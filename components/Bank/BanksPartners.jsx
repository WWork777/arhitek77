"use client";
import "./BanksPartners.scss";
import Image from "next/image";
import React from "react";

function BanksPartners() {
  const bankPartners = [
    { id: 1, name: "Сбербанк", logo: "/banks/Sber.webp" },
    { id: 2, name: "Альфабанк", logo: "/banks/alfa.png" },
    { id: 3, name: "ДомРФ", logo: "/banks/domrf.png" },
    { id: 4, name: "Россельхозбанк", logo: "/banks/rshb.png" },
    { id: 5, name: "Левобережный", logo: "/banks/levobereg.jpg" },
    { id: 6, name: "Почтабанк", logo: "/banks/pochta.png" },
  ];

  return (
    <section className="banks-partners-block">
      <div className="banks-partners-container">
        <div className="banks-content-wrapper">
          <div className="banks-text-block">
            <h2 className="banks-title">
              {" "}
              <b>Рассрочка без банка под 0%</b>
            </h2>
            <p className="banks-description">
              Получите специальное предложение от компании Архитек42
            </p>

            <ul className="banks-benefits">
              <li>— Рассрочка 0% до 5 лет без банков</li>
              <li>— Гарантия сдачи дома</li>
              <li>— Бесплатная консультация по условиям</li>
            </ul>

            <button className="banks-application-btn"  type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModa2"
             data-bs-title="Рассрочка без банка под 0%"
             >Узнать подробности</button>
          </div>

          <div className="banks-logos-block">
            <div className="banks-logos-grid">
              {bankPartners.map((bank) => (
                <div key={bank.id} className="bank-logo-item">
                  <Image
                    src={bank.logo}
                    alt={bank.name}
                    width={80}
                    height={48}
                    className="bank-logo-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BanksPartners;
