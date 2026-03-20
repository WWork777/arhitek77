"use client";
import "./Consultation.scss";
import React from "react";
import Image from "next/image";

function Consultation() {
  const handleCall = () => {
    window.location.href = "tel:+7 (3842) 65 77 75";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://max.ru/u/f9LHodD0cOJRtuggQMOzpRNL_nNU-UmfUsIFVsCkyA29ihOmzySYtogrmNo",
      "_blank"
    );
  };

  const handleTelegram = () => {
    window.open("https://t.me/oblasovaleksandr", "_blank");
  };

  const handleVk = () => {
    window.open("https://vk.com/arhitek142", "_blank");
  };

  return (
    <section className="consultation-block">
      <div className="consultation-container">
        <div className="consultation-wrapper">
          <div className="consultation-content">
            <h1 className="consultation-main-title">
              Консультация специалиста
            </h1>
            <h2 className="consultation-title">Давайте обсудим ваши задачи?</h2>

            <p className="consultation-description">
              Мы не собираем и не передаем ваши персональные данные, поэтому
              свяжитесь с нами самостоятельно, пожалуйста
            </p>

            <div className="contact-methods">
              <h3 className="contact-title">Свяжитесь удобным способом:</h3>
              <div className="contact-buttons">
                <button
                  className="btn-consultation btn-call btn"
                  onClick={handleCall}
                >
                  <div className="btn-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="btn-content">
                    <span className="btn-title">Позвонить</span>
                    <span className="btn-description">+7 (3842) 65 77 75</span>
                  </div>
                </button>

                <button
                  className="btn-consultation btn-telegram btn"
                  onClick={handleWhatsApp}
                >
                  <div className="btn-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 64 64"
                      baseProfile="basic"
                      fill="#39b1f5"
                    >
                      <path
                        d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 44.15 19.85 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 22.059 50 14 41.941 14 32 C 14 22.059 22.059 14 32 14 z"
                        
                      ></path>

                      <g transform="translate(19,45) scale(0.0082,-0.0082)">
                        <path d="M1450 3184 c-14 -2 -68 -11 -120 -20 -506 -85 -965 -434 -1180 -899 -114 -245 -157 -505 -139 -832 12 -214 43 -392 123 -704 69 -268 90 -382 101 -539 4 -59 13 -105 23 -123 79 -133 443 -60 634 127 l37 36 86 -56 c169 -110 294 -151 498 -163 221 -14 435 12 624 74 124 41 329 147 433 225 312 234 528 566 610 937 16 74 20 128 20 341 0 219 -3 265 -21 349 -134 620 -603 1090 -1221 1225 -71 15 -140 21 -288 23 -107 2 -206 2 -220 -1z m348 -799 c305 -71 552 -326 616 -637 76 -369 -138 -754 -499 -899 -222 -88 -452 -75 -660 39 l-70 39 -75 -62 c-87 -70 -134 -93 -159 -78 -48 30 -95 151 -127 328 -26 141 -26 465 -1 583 72 337 266 575 540 667 43 14 104 30 135 35 71 11 217 4 300 -15z"/>
                      </g>
                    </svg>
                  </div>
                  <div className="btn-content">
                    <span className="btn-title">Max</span>
                    <span className="btn-description">Написать в чат</span>
                  </div>
                </button>

                <button
                  className="btn-consultation btn-telegram btn"
                  onClick={handleVk}
                >
                  <div className="btn-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      width="36px"
                      height="36px"
                      baseProfile="basic"
                      fill="#4d7198"
                    >
                      <path d="M41.242,35.833c2.088,1.854,2.522,2.515,2.593,2.628C44.7,39.833,42.876,40,42.876,40H39.03c0,0-0.936,0.01-1.736-0.52	c-1.304-0.854-2.669-2.51-3.63-2.222c-0.805,0.241-0.797,1.329-0.797,2.26c0,0.333-0.286,0.483-0.933,0.483h-1.202	c-2.107,0-4.392-0.709-6.672-3.092c-3.226-3.368-6.055-10.154-6.055-10.154s-0.167-0.342,0.015-0.55	c0.206-0.233,0.767-0.203,0.767-0.203L22.516,26c0,0,0.351,0.066,0.603,0.244c0.208,0.146,0.324,0.424,0.324,0.424	s0.626,2.068,1.424,3.387c1.559,2.574,2.284,2.639,2.813,2.362c0.773-0.401,0.521-3.138,0.521-3.138s0.035-1.175-0.369-1.699	c-0.311-0.405-0.905-0.621-1.165-0.654c-0.21-0.027,0.141-0.395,0.588-0.605c0.597-0.266,1.41-0.334,2.812-0.321	c1.091,0.01,1.406,0.076,1.831,0.174c1.287,0.297,0.969,1.08,0.969,3.829c0,0.881-0.121,2.12,0.543,2.53	c0.286,0.177,1.268,0.394,3.016-2.444c0.83-1.345,1.49-3.578,1.49-3.578s0.136-0.245,0.348-0.367	c0.216-0.124,0.21-0.121,0.507-0.121c0.297,0,3.273-0.023,3.926-0.023c0.652,0,1.265-0.007,1.37,0.375	c0.151,0.55-0.481,2.433-2.085,4.477C39.349,34.207,39.056,33.893,41.242,35.833z" />
                      <path d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,14	c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z" />
                    </svg>
                  </div>
                  <div className="btn-content">
                    <span className="btn-title">Вконтакте</span>
                    <span className="btn-description">Написать сообщение</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultation;
