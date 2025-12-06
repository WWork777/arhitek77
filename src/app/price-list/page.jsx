import Hero from "../../../components/Home/Hero/Hero";
import Consultation from "../../../components/Consultation/Consultation";
import { seoData } from "../utils/SeoData";
import Price from "../../../components/Price/Price";
import Catalog from "../../../components/Catalog/Catalog";
import { priceData } from "../utils/ProektPriceData";

export const metadata = {
  title: seoData.pricelist.title,
  description: seoData.pricelist.description,
  keywords: seoData.pricelist.keywords,
  alternates: {
    canonical: seoData.pricelist.canonical,
  },
  openGraph: {
    title: seoData.pricelist.og_title,
    description: seoData.pricelist.og_description,
    locale: seoData.pricelist.og_locale,
    type: seoData.pricelist.og_type,
    url: seoData.pricelist.og_url,
    siteName: seoData.pricelist.og_site_name,
    images: [
      {
        url: seoData.pricelist.og_img_url,
        width: seoData.pricelist.og_img_width,
        height: seoData.pricelist.og_img_height,
        alt: seoData.pricelist.og_img_alt,
      },
    ],
  },

  article: {
    publishedTime: seoData.pricelist.article_modified_time,
    modifiedTime: seoData.pricelist.article_modified_time,
    authors: [seoData.pricelist.article_publisher],
  },

  twitter: {
    card: seoData.pricelist.twitter_card,
    site: seoData.pricelist.twitter_site,
    creator: seoData.pricelist.twitter_site,
  },

  other: {
    SKYPE_TOOLBAR: seoData.pricelist.SKYPE_TOOLBAR,
  },
};
export default function PriceList() {
  return (
    <>
      <Hero
        title="СТОИМОСТЬ УСЛУГ"
        description="Компании архитек77"
        buttonName="Оставить заявку"
        backgroundSrc={`/Catalog/RockNRoll286/RockNRoll286.webp`}
      />
      <Price
        priceData={priceData}
        title={"СТОИМОСТЬ УСЛУГ <b>ПРОЕКТИРОВАНИЯ</b>"}
      />
      <Catalog />
      <Consultation />
    </>
  );
}
