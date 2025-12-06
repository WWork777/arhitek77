import ConstructionPage from "./components/ConstructionPage";
import { seoData } from "../utils/SeoData";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: seoData.construction.theme_color,
};

export const metadata = {
  title: seoData.construction.title,
  description: seoData.construction.description,
  keywords: seoData.construction.keywords,
  alternates: {
    canonical:seoData.construction.canonical
    },
  openGraph: {
    title: seoData.construction.og_title,
    description: seoData.construction.og_description,
    locale: seoData.construction.og_locale,
    type: seoData.construction.og_type,
    url: seoData.construction.og_url,
    siteName: seoData.construction.og_site_name,
    images: [
      {
        url: seoData.construction.og_img_url,
        width: seoData.construction.og_img_width,
        height: seoData.construction.og_img_height,
        alt: seoData.construction.og_img_alt,
      },
    ],
  },
  article: {
    publishedTime: seoData.construction.article_modified_time,
    modifiedTime: seoData.construction.article_modified_time,
    authors: [seoData.construction.article_publisher],
  },
  twitter: {
    card: seoData.construction.twitter_card,
    site: seoData.construction.twitter_site,
    creator: seoData.construction.twitter_site,
  },
  other: {
    SKYPE_TOOLBAR: seoData.construction.SKYPE_TOOLBAR,
  },
};

export default function Construction() {
  return <ConstructionPage />;
}
