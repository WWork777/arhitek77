import Image from "next/image";
import Hero from "../../components/Home/Hero/Hero";
// import Projects from "../../components/Home/Projects/Projects";

import Blog from "../../components/Catalog/Catalog";
import Advantages from "../../components/Home/Advantages/Advantages";
// import Form from "../../components/Home/Form/Form";
import Quiz from "../../components/QuizEVG/Quiz";
import VideoGallery from "../../components/VideoGallery/VideoGallery";
import videos from "../../components/VideoGallery/videos.json";
import QuizComponent from "../../components/QuizComponent/QuizComponent";
import Consultation from "../../components/Consultation/Consultation";
import BanksPartners from "../../components/Bank/BanksPartners";
import HomePromo from "../../components/IpotekaBanner/IpotekaBanner";

export const metadata = {
  title:
    "Проектирование частных домов и коттеджей в Москве | Стоимость от 750 ₽/м² за уникальный проект мирового уровня",
  description:
    "Заказать индивидуальный проект загородного дома под ключ в Архитек77. Для бесплатной консультации с ведущим архитектором звоните по тел. +7 923 480-83-30",
  alternates: {
    canonical: "https://arhitek77.ru",
  },
  keywords: [
    "построить дом",
    "строительство домов",
    "дом под ключ",
    "дом под ключ цена",
    "строительство домов Москва",
  ],
  openGraph: {
    title: "Строительство домов под ключ в Москве",
    description:
      "Заказать индивидуальный проект загородного дома под ключ в Архитек77. Для бесплатной консультации с ведущим архитектором звоните по тел. +7 923 480-83-30",
    url: `https://arhitek77.ru`,
    images: [
      {
        url: `/favicon/og-banner.png`,
        alt: "Архитек",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <HomePromo />
      <BanksPartners />
      <QuizComponent />

      {/* <Quiz /> */}
      <Blog />
      <VideoGallery videos={videos} title="Видеоблог Архитек" />
      <Consultation />
      {/* <Services /> */}
      {/* <Form /> */}
    </>
  );
}
