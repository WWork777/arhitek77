"use client";
import "./Header.scss";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const openButtonRef = useRef(null);
  const router = useRouter();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (openButtonRef.current) {
      openButtonRef.current.click();
    }
    router.push(href);
  };

  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("down");
        setIsFixed(false);
        setIsScrolledUp(false);
      } else if (currentScrollTop < lastScrollTop) {
        setScrollDirection("up");
        setIsFixed(true);
        setIsScrolledUp(currentScrollTop > 0);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <header
        className={`${isFixed ? "" : "absolute"} ${
          isScrolledUp ? "darkened" : ""
        }`}
      >
        <div className="header-container">
          <Link href="/" className="logo-container">
            <img src="/logo.png"></img>
            <div className="name">
              <span>АРХИТЕК</span>
              <span>
                АРХИТЕКТУРНО-СТРОИТЕЛЬНАЯ
                <br />
                КОМПАНИЯ
              </span>
            </div>
          </Link>
          <div className="menu">
            <Link href="/">ГЛАВНАЯ</Link>
            <div
              className="services-dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="dropdown-toggled">
                <span>НАШИ УСЛУГИ</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className={`dropdown-arrow ${isServicesOpen ? "open" : ""}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>

              {isServicesOpen && (
                <div className="dropdown-menu">
                  <Link href="/catalog-proektov">ПРОЕКТИРОВАНИЕ</Link>
                  <Link href="/stoimost-stroitelstva">
                    РАСЧЕТ СТРОИТЕЛЬСТВА
                  </Link>
                  <Link href="/design">ДИЗАЙН ИНТЕРЬЕРА</Link>
                </div>
              )}
            </div>
            {/* <Link href="/selskaya-ipoteka">СЕЛЬСКАЯ ИПОТЕКА</Link> */}
            <Link href="/price-list">ПРАЙС-ЛИСТ</Link>
            <Link href="/galery">ГАЛЕРЕЯ</Link>
            <Link href="/blog">БЛОГ</Link>
            <Link href="/contacts">КОНТАКТЫ</Link>
          </div>
          <button
            ref={openButtonRef}
            id="btn-menu"
            className="btn-menu"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="whitesmoke"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>

          <div className="contacts-container">
            <div className="icons">
              <a href="https://vk.com/arhitek142">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="64px"
                  fill="whitesmoke"
                  height="64px"
                  baseProfile="basic"
                >
                  <path d="M41.242,35.833c2.088,1.854,2.522,2.515,2.593,2.628C44.7,39.833,42.876,40,42.876,40H39.03c0,0-0.936,0.01-1.736-0.52	c-1.304-0.854-2.669-2.51-3.63-2.222c-0.805,0.241-0.797,1.329-0.797,2.26c0,0.333-0.286,0.483-0.933,0.483h-1.202	c-2.107,0-4.392-0.709-6.672-3.092c-3.226-3.368-6.055-10.154-6.055-10.154s-0.167-0.342,0.015-0.55	c0.206-0.233,0.767-0.203,0.767-0.203L22.516,26c0,0,0.351,0.066,0.603,0.244c0.208,0.146,0.324,0.424,0.324,0.424	s0.626,2.068,1.424,3.387c1.559,2.574,2.284,2.639,2.813,2.362c0.773-0.401,0.521-3.138,0.521-3.138s0.035-1.175-0.369-1.699	c-0.311-0.405-0.905-0.621-1.165-0.654c-0.21-0.027,0.141-0.395,0.588-0.605c0.597-0.266,1.41-0.334,2.812-0.321	c1.091,0.01,1.406,0.076,1.831,0.174c1.287,0.297,0.969,1.08,0.969,3.829c0,0.881-0.121,2.12,0.543,2.53	c0.286,0.177,1.268,0.394,3.016-2.444c0.83-1.345,1.49-3.578,1.49-3.578s0.136-0.245,0.348-0.367	c0.216-0.124,0.21-0.121,0.507-0.121c0.297,0,3.273-0.023,3.926-0.023c0.652,0,1.265-0.007,1.37,0.375	c0.151,0.55-0.481,2.433-2.085,4.477C39.349,34.207,39.056,33.893,41.242,35.833z" />
                  <path d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,14	c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z" />
                </svg>
              </a>
              <a href="https://max.ru/u/f9LHodD0cOJRtuggQMOzpRNL_nNU-UmfUsIFVsCkyA29ihOmzySYtogrmNo">
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
              <a href="https://rutube.ru/channel/27042220/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="-2 -3 28 28"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="9"
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
            <div className="line"></div>
            <div className="tel">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
              <a href="tel:+79234808330">+7 (923) 480-83-30</a>
            </div>
          </div>
        </div>
      </header>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="false"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ filter: "invert(1) grayscale(100%) brightness(200%)" }}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="menu">
            <div className="logo-container">
              <img src="/logo.png"></img>
              <div className="name">
                <span>АРХИТЕК</span>
                <span>АРХИТЕКТУРНО-СТРОИТЕЛЬНАЯ КОМПАНИЯ</span>
              </div>
            </div>
            <Link
              className="link-close"
              href="/"
              onClick={(e) => handleLinkClick(e, "/")}
            >
              ГЛАВНАЯ
            </Link>
            {/* <Link
              className="link-close"
              href="/selskaya-ipoteka"
              onClick={(e) => handleLinkClick(e, "/selskaya-ipoteka")}
            >
              СЕЛЬСКАЯ ИПОТЕКА
            </Link> */}
            <Link
              className="link-close"
              href="/catalog-proektov"
              onClick={(e) => handleLinkClick(e, "/catalog-proektov")}
            >
              ПРОЕКТИРОВАНИЕ
            </Link>
            <Link
              className="link-close"
              href="/stoimost-stroitelstva"
              onClick={(e) => handleLinkClick(e, "/stoimost-stroitelstva")}
            >
              РАСЧЕТ СТРОИТЕЛЬСТВА
            </Link>
            <Link
              className="link-close"
              href="/design"
              onClick={(e) => handleLinkClick(e, "/design")}
            >
              ДИЗАЙН ИНТЕРЬЕРА
            </Link>
            <Link
              className="link-close"
              href="/price-list"
              onClick={(e) => handleLinkClick(e, "/price-list")}
            >
              ПРАЙС-ЛИСТ
            </Link>
            <Link
              className="link-close"
              href="/blog"
              onClick={(e) => handleLinkClick(e, "/blog")}
            >
              БЛОГ
            </Link>
            <Link
              className="link-close"
              href="/contacts"
              onClick={(e) => handleLinkClick(e, "/contacts")}
            >
              КОНТАКТЫ
            </Link>
            <div className="footer-contacts">
              <div className="links">
                <a href="https://vk.com/arhitek142">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="36px"
                    height="36px"
                    fill="whitesmoke"
                    baseProfile="basic"
                  >
                    <path d="M41.242,35.833c2.088,1.854,2.522,2.515,2.593,2.628C44.7,39.833,42.876,40,42.876,40H39.03c0,0-0.936,0.01-1.736-0.52	c-1.304-0.854-2.669-2.51-3.63-2.222c-0.805,0.241-0.797,1.329-0.797,2.26c0,0.333-0.286,0.483-0.933,0.483h-1.202	c-2.107,0-4.392-0.709-6.672-3.092c-3.226-3.368-6.055-10.154-6.055-10.154s-0.167-0.342,0.015-0.55	c0.206-0.233,0.767-0.203,0.767-0.203L22.516,26c0,0,0.351,0.066,0.603,0.244c0.208,0.146,0.324,0.424,0.324,0.424	s0.626,2.068,1.424,3.387c1.559,2.574,2.284,2.639,2.813,2.362c0.773-0.401,0.521-3.138,0.521-3.138s0.035-1.175-0.369-1.699	c-0.311-0.405-0.905-0.621-1.165-0.654c-0.21-0.027,0.141-0.395,0.588-0.605c0.597-0.266,1.41-0.334,2.812-0.321	c1.091,0.01,1.406,0.076,1.831,0.174c1.287,0.297,0.969,1.08,0.969,3.829c0,0.881-0.121,2.12,0.543,2.53	c0.286,0.177,1.268,0.394,3.016-2.444c0.83-1.345,1.49-3.578,1.49-3.578s0.136-0.245,0.348-0.367	c0.216-0.124,0.21-0.121,0.507-0.121c0.297,0,3.273-0.023,3.926-0.023c0.652,0,1.265-0.007,1.37,0.375	c0.151,0.55-0.481,2.433-2.085,4.477C39.349,34.207,39.056,33.893,41.242,35.833z" />
                    <path d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,14	c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S41.925,14,32,14z" />
                  </svg>
                </a>
                <a href="https://max.ru/u/f9LHodD0cOJRtuggQMOzpRNL_nNU-UmfUsIFVsCkyA29ihOmzySYtogrmNo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
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
                <a href="https://rutube.ru/channel/27042220/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="-2 -3 28 28"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="9"
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
              <div className="contacts-container">
                <div className="tel">
                  <a href="tel:+79234808330">+7 (923) 480-83-30</a>
                </div>
              </div>
              <a href="mailto:750535@bk.ru">750535@bk.ru</a>
              <button
                className="link-more"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModa2"
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
          </div>
        </div>
      </div>
    </>
  );
}
