"use client";
import "./Catalog.scss";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

function Catalog({ showAll = false }) {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data/MainCatalogCard.json")
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

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) => {
        const projectNameMatch = article.projectName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const floorsMatch = article.floors.includes(searchTerm);
        return projectNameMatch || floorsMatch;
      });
      setFilteredArticles(filtered);
    }
  }, [searchTerm, articles]);

  return (
    <div className="container-blog">
      <div className="blog">
        <h1>
          Каталог <b>проектов</b>
        </h1>
        {/* {showAll && (
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Поиск по названию или количеству этажей..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        )} */}
        <div className="articles-container-home">
          {filteredArticles.map((article) => (
            <Link
              style={{ textDecoration: "none" }}
              href={`/catalog/${article.slug}`}
              key={article.id}
              className="article-card-link"
            >
              <div className="article-card">
                <img
                  src={`/Catalog/${article.projectName}/${article.projectName}.webp`}
                  alt={article.projectName}
                />
                <div className="content-overlay">
                  <h4>Проект дома {article.title}</h4>
                  {/* <div className="tags">
                    <span>{article.floors} этажа</span>
                  </div> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {!showAll && (
          <Link href="/catalog-proektov" className="back-button">
            ВСЕ ПРОЕКТЫ
          </Link>
        )}
      </div>
    </div>
  );
}

export default Catalog;
