"use client";
import Link from "next/link";
import "./ProjectAndCostSection.scss";

export default function ProjectAndCostSection() {
  return (
    <section className="projects-cost-block">
      <div className="projects-cost-container">
        <div className="projects-cost-wrapper">
          {/* Все проекты */}
          <div className="projects-cost-card projects-card">
            <h3 className="projects-cost-title">Ознакомиться с нашими проектами</h3>
            <Link href="/catalog-proektov" className="projects-cost-button">
              Все проекты
            </Link>
          </div>

          {/* Расчет стоимости */}
          <div className="projects-cost-card calculate-card">
            <h3 className="projects-cost-title">Заказать расчет стоимости строительства</h3>
            <Link href="/stoimost-stroitelstva" className="projects-cost-button">
              Расчет стоимости
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}