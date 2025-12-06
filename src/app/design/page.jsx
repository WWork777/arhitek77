import Hero from "../../../components/Home/Hero/Hero";
import Consultation from "../../../components/Consultation/Consultation";
import { seoData } from "../utils/SeoData";
import InterierJurGory from "../../../public/data/InterierJurGory.json";
import InterierLenKuz from "../../../public/data/InterierLenKuz.json";
import InterierVremenaGoda from "../../../public/data/InterierVremenaGoda.json";
import InterierItem from "../../../components/Interier/InterierItem";
import InterierItemJG from "../../../components/Interier/JurGory/InterierItemJG";
import DisignPrice from "../../../components/DisignPrice/DisignPrice";

export const metadata = {
  title: seoData.design.title,
  description: seoData.design.description,
  keywords: seoData.design.keywords,
  alternates: {
    canonical: seoData.design.canonical,
  },
  openGraph: {
    title: seoData.design.og_title,
    description: seoData.design.og_description,
    locale: seoData.design.og_locale,
    type: seoData.design.og_type,
    url: seoData.design.og_url,
    siteName: seoData.design.og_site_name,
    images: [
      {
        url: seoData.design.og_img_url,
        width: seoData.design.og_img_width,
        height: seoData.design.og_img_height,
        alt: seoData.design.og_img_alt,
      },
    ],
  },

  article: {
    publishedTime: seoData.design.article_modified_time,
    modifiedTime: seoData.design.article_modified_time,
    authors: [seoData.design.article_publisher],
  },

  twitter: {
    card: seoData.design.twitter_card,
    site: seoData.design.twitter_site,
    creator: seoData.design.twitter_site,
  },

  other: {
    SKYPE_TOOLBAR: seoData.design.SKYPE_TOOLBAR,
  },
};
export default function Design() {
  return (
    <>
      <Hero
        title="ЖИЛЫЕ ИНТЕРЬЕРЫ"
        description="Компании архитек77"
        buttonName="Оставить заявку"
        backgroundSrc={`/Interier/fon.webp`}
      />
      <InterierItemJG interierItem={InterierJurGory} />
      <InterierItem interierItem={InterierLenKuz} />
      <InterierItem interierItem={InterierVremenaGoda} />
      <DisignPrice />
      <Consultation />
    </>
  );
}
