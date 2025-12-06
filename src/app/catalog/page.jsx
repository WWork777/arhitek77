import Catalog from "../../../components/Catalog/Catalog";
import Hero from "../../../components/Home/Hero/Hero";
import Consultation from "../../../components/Consultation/Consultation";

import { seoData } from "../utils/SeoData";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: seoData.designing.theme_color,
};

export const metadata = {
  title: seoData.designing.title,
  description: seoData.designing.description,
  keywords: seoData.designing.keywords,

  openGraph: {
    title: seoData.designing.og_title,
    description: seoData.designing.og_description,
    locale: seoData.designing.og_locale,
    type: seoData.designing.og_type,
    url: seoData.designing.og_url,
    siteName: seoData.designing.og_site_name,
    images: [
      {
        url: seoData.designing.og_img_url,
        width: seoData.designing.og_img_width,
        height: seoData.designing.og_img_height,
        alt: seoData.designing.og_img_alt,
      },
    ],
  },

  article: {
    publishedTime: seoData.designing.article_modified_time,
    modifiedTime: seoData.designing.article_modified_time,
    authors: [seoData.designing.article_publisher],
  },

  twitter: {
    card: seoData.designing.twitter_card,
    site: seoData.designing.twitter_site,
    creator: seoData.designing.twitter_site,
  },

  other: {
    SKYPE_TOOLBAR: seoData.designing.SKYPE_TOOLBAR,
  },
};

export default function PageCatalog() {
  return (
    <>
      <Hero backgroundSrc={`/Catalog/RockNRoll284/RockNRoll284.webp`} />
      <Catalog
        showAll={true}
        dataSources={[
          { path: "/data/MainCatalogCard.json", title: "Каталог проектов" },
        ]}
      />
      <Consultation />
    </>
  );
}
