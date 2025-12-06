"use client";

import React from "react";
import "./Price.scss";

export default function Price({ title, priceData }) {
  return (
    <div className="price-container">
      <h1
        className="price-title"
        dangerouslySetInnerHTML={{ __html: `${title}` }}
      ></h1>
      {priceData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="price-section">
          <h3 className="section-title">{section.title}</h3>
          <div className="price-items">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="price-item">
                <span className="service-name">{item.name}</span>
                <span className="service-price">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
