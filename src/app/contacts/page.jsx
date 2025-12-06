import "./Contacts.scss";
// import { Helmet } from 'react-helmet';
// import HeroSection from '../Components/HeroSection/HeroSection';
import Link from "next/link";
import Hero from "../../../components/Home/Hero/Hero";
import Consultation from "../../../components/Consultation/Consultation";
import { seoData } from "../utils/SeoData";
import YMap from "./map/map";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: seoData.designing.theme_color,
};

export const metadata = {
  title: seoData.contacts.title,
  description: seoData.contacts.description,
  keywords: seoData.contacts.keywords,
  alternates: {
    canonical: seoData.contacts.canonical,
  },
  openGraph: {
    title: seoData.contacts.og_title,
    description: seoData.contacts.og_description,
    locale: seoData.contacts.og_locale,
    type: seoData.contacts.og_type,
    url: seoData.contacts.og_url,
    siteName: seoData.contacts.og_site_name,
    images: [
      {
        url: seoData.contacts.og_img_url,
        width: seoData.contacts.og_img_width,
        height: seoData.contacts.og_img_height,
        alt: seoData.contacts.og_img_alt,
      },
    ],
  },

  article: {
    publishedTime: seoData.contacts.article_modified_time,
    modifiedTime: seoData.contacts.article_modified_time,
    authors: [seoData.contacts.article_publisher],
  },

  twitter: {
    card: seoData.contacts.twitter_card,
    site: seoData.contacts.twitter_site,
    creator: seoData.contacts.twitter_site,
  },

  other: {
    SKYPE_TOOLBAR: seoData.contacts.SKYPE_TOOLBAR,
  },
};

function Contacts() {
  return (
    <>
      <div className="contacts">
        <Hero
          title="Контакты"
          description="Архитек77"
          backgroundSrc={`/Catalog/RockNRoll185/RockNRoll185.webp`}
        />
        <div className="contact-info">
          <Link href="tel:+7 (923) 480 83 30" className="contact-info_card">
            <div>
              <h4>Номер телефона </h4>
              <h5>+7 (923) 480 83 30</h5>
            </div>
          </Link>
          <Link href="mailto:750535@bk.ru" className="contact-info_card">
            <div>
              <h4>Почта</h4>
              <h5>750535@bk.ru</h5>
            </div>
          </Link>
          <Link
            href="https://yandex.ru/maps/-/CHfLe6lc"
            className="contact-info_card"
          >
            <div>
              <h4>Адрес</h4>
              <h5>Совхозная улица, 15, Химки, Московская область</h5>
            </div>
          </Link>
        </div>
        {/* <YMap /> */}
        <Consultation />
      </div>
    </>
  );
}

export default Contacts;
