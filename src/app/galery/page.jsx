import GalleryPage from "../../../components/GaleryPage/GaleryPage";
import Hero from "../../../components/Home/Hero/Hero";
import { seoData } from "../utils/SeoData";
import BlogHero from "../../../components/Blog/Hero/BlogHero";

export const metadata = {
  title: seoData.galery.title,
  description: seoData.galery.description,
  keywords: seoData.galery.keywords,
  alternates: {
    canonical: seoData.galery.canonical,
  },
  openGraph: {
    title: seoData.galery.og_title,
    description: seoData.galery.og_description,
    locale: seoData.galery.og_locale,
    type: seoData.galery.og_type,
    url: seoData.galery.og_url,
    siteName: seoData.galery.og_site_name,
    images: [
      {
        url: seoData.galery.og_img_url,
        width: seoData.galery.og_img_width,
        height: seoData.galery.og_img_height,
        alt: seoData.galery.og_img_alt,
      },
    ],
  },

  article: {
    publishedTime: seoData.galery.article_modified_time,
    modifiedTime: seoData.galery.article_modified_time,
    authors: [seoData.galery.article_publisher],
  },

  twitter: {
    card: seoData.galery.twitter_card,
    site: seoData.galery.twitter_site,
    creator: seoData.galery.twitter_site,
  },

  other: {
    SKYPE_TOOLBAR: seoData.galery.SKYPE_TOOLBAR,
  },
};

export default function Galery() {
  return (
    <>
      <Hero
        title="Галерея проектов"
        description="Архитек77"
        backgroundSrc={`/Catalog/Regtime132/Regtime132_3.webp`}
      />
      <GalleryPage />
    </>
  );
}
