"use client";
import "./Footer.scss";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer>
        <Image
          src={`/Footer/footer.webp`}
          alt="Архитектурно-строительная компания - подвал"
          width={2000}
          height={2000}
        />
        <div className="footer-fon">
          <div className="footer-menu">
            <Link href="/">Главная</Link>
            {/* <Link href="/selskaya-ipoteka">Сельская ипотека</Link> */}
            <Link href="/catalog-proektov">Проектирование</Link>
            <Link href="/stoimost-stroitelstva">Расчет строительства</Link>
            <Link href="/design">Дизайн интерьера</Link>
            <Link href="/price-list">Прайс-лист</Link>
            <Link href="/contacts">Контакты</Link>
            <Link href="https://rutube.ru/channel/27042220/">RUTUBE</Link>
          </div>
          <div className="footer-logo">
            <span>АРХИТЕК</span>
            <span>
              Архитектурно-строительная <br /> компания
            </span>
          </div>
          <div className="footer-contacts">
            <a href="tel:+79234808330">+7 (923) 480-83-30</a>
            <a href="mailto:750535@bk.ru">750535@bk.ru</a>
            <p>для коммерческих предложений:</p>
            <a href="mailto:750535@bk.ru">750535@bk.ru</a>
            <div className="links">
              <a href="https://vk.com/arhitek142" className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="36px"
                  height="36px"
                  baseProfile="basic"
                >
                  <path d="M41.242,35.833c2.088,1.854,2.522,2.515,2.593,2.628C44.7,39.833,42.876,40,42.876,40H39.03c0,0-0.936,0.01-1.736-0.52	c-1.304-0.854-2.669-2.51-3.63-2.222c-0.805,0.241-0.797,1.329-0.797,2.26c0,0.333-0.286,0.483-0.933,0.483h-1.202	c-2.107,0-4.392-0.709-6.672-3.092c-3.226-3.368-6.055-10.154-6.055-10.154s-0.167-0.342,0.015-0.55	c0.206-0.233,0.767-0.203,0.767-0.203L22.516,26c0,0,0.351,0.066,0.603,0.244c0.208,0.146,0.324,0.424,0.324,0.424	s0.626,2.068,1.424,3.387c1.559,2.574,2.284,2.639,2.813,2.362c0.773-0.401,0.521-3.138,0.521-3.138s0.035-1.175-0.369-1.699	c-0.311-0.405-0.905-0.621-1.165-0.654c-0.21-0.027,0.141-0.395,0.588-0.605c0.597-0.266,1.41-0.334,2.812-0.321	c1.091,0.01,1.406,0.076,1.831,0.174c1.287,0.297,0.969,1.08,0.969,3.829c0,0.881-0.121,2.12,0.543,2.53	c0.286,0.177,1.268,0.394,3.016-2.444c0.83-1.345,1.49-3.578,1.49-3.578s0.136-0.245,0.348-0.367	c0.216-0.124,0.21-0.121,0.507-0.121c0.297,0,3.273-0.023,3.926-0.023c0.652,0,1.265-0.007,1.37,0.375	c0.151,0.55-0.481,2.433-2.085,4.477C39.349,34.207,39.056,33.893,41.242,35.833z" />
                  <path d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,14	c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z" />
                </svg>
              </a>
              <a
                href="https://max.ru/u/f9LHodD0cOJRtuggQMOzpRNL_nNU-UmfUsIFVsCkyA29ihOmzySYtogrmNo"
                className="icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 64 64"
                  baseProfile="basic"
                  fill="whitesmoke"
                >
                  <path
                    d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 22.059 50 14 41.941 14 32 C 14 22.059 22.059 14 32 14 z"
                    
                  ></path>

                  <g transform="translate(19,45) scale(0.0082,-0.0082)">
                    <path d="M1450 3184 c-14 -2 -68 -11 -120 -20 -506 -85 -965 -434 -1180 -899 -114 -245 -157 -505 -139 -832 12 -214 43 -392 123 -704 69 -268 90 -382 101 -539 4 -59 13 -105 23 -123 79 -133 443 -60 634 127 l37 36 86 -56 c169 -110 294 -151 498 -163 221 -14 435 12 624 74 124 41 329 147 433 225 312 234 528 566 610 937 16 74 20 128 20 341 0 219 -3 265 -21 349 -134 620 -603 1090 -1221 1225 -71 15 -140 21 -288 23 -107 2 -206 2 -220 -1z m348 -799 c305 -71 552 -326 616 -637 76 -369 -138 -754 -499 -899 -222 -88 -452 -75 -660 39 l-70 39 -75 -62 c-87 -70 -134 -93 -159 -78 -48 30 -95 151 -127 328 -26 141 -26 465 -1 583 72 337 266 575 540 667 43 14 104 30 135 35 71 11 217 4 300 -15z"/>
                  </g>
                </svg>
              </a>
              <a href="https://rutube.ru/channel/27042220/" className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="-2 -3 28 28"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="12"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.7"
                  />

                  <path
                    fill="white"
                    d="M16.8 10c0 .4-.08.8-.24 1.14-.16.34-.38.65-.65.92-.27.27-.58.48-.94.62-.36.14-.75.21-1.17.21h-.33l3.05 3.02h-3.2l-3.08-3.02H7.45v3.03H5.19V6h8.61c.42 0 .81.08 1.17.23.36.15.68.35.94.62.27.27.48.58.65.92.16.34.24.71.24 1.12v.99zm-2.25-1c0-.2-.07-.38-.22-.52-.15-.14-.33-.21-.55-.21H7.45v2.5h6.36c.2 0 .38-.07.52-.21.14-.14.22-.32.22-.52v-.99z"
                  />
                </svg>
              </a>
            </div>
            <b>ООО "Архитек42"</b>
            <b>ОГРН: 1194205015927</b>
            <b style={{ marginBottom: "20px" }}>ИНН: 4205382735</b>
            <button
              className="link-more"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span>ОСТАВИТЬ ЗАЯВКУ</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>

          <div className="footer_copyright">
            <a href="https://virlab42.ru">Сайт разработан компанией <span>Вирлаб</span></a>
          </div>
        </div>
      </footer>
    </>
  );
}
