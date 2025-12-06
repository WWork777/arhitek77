
import BlogHero from "../../../components/Blog/Hero/BlogHero";
import BlogLauoyt from "../../../components/Blog/BlogLayout";
import VideoGallery from "../../../components/VideoGallery/VideoGallery";
import videos from "../../../components/VideoGallery/videos.json";
import ProjectAndCostSection from "../../../components/Blog/ProjectAndCostSection/ProjectAndCostSection";
import Consultation from "../../../components/Consultation/Consultation";
import { seoData } from "../utils/SeoData";

export const metadata = {
  title: seoData.blog.title,
  description: seoData.blog.description,
  keywords: seoData.blog.keywords,
  alternates: {
    canonical:seoData.blog.canonical
    },
  openGraph: {
    title: seoData.blog.og_title,
    description: seoData.blog.og_description,
    locale: seoData.blog.og_locale,
    type: seoData.blog.og_type,
    url: seoData.blog.og_url,
    siteName: seoData.blog.og_site_name,
    images: [
      {
        url: seoData.blog.og_img_url,
        width: seoData.blog.og_img_width,
        height: seoData.blog.og_img_height,
        alt: seoData.blog.og_img_alt,
      },
    ],
  },

  article: {
    publishedTime: seoData.blog.article_modified_time,
    modifiedTime: seoData.blog.article_modified_time,
    authors: [seoData.blog.article_publisher],
  },

  twitter: {
    card: seoData.blog.twitter_card,
    site: seoData.blog.twitter_site,
    creator: seoData.blog.twitter_site,
  },

  other: {
    SKYPE_TOOLBAR: seoData.blog.SKYPE_TOOLBAR,
  },
};

export default function Blog(){

    return(
        <>
            <BlogHero title="Блог компании Архитек" description="" buttonName="Узнать стоимость строительства" backgroundSrc={`/Catalog/RockNRoll305/RockNRoll305.webp`}/>
            <BlogLauoyt/>
            <VideoGallery videos={videos} title="Видеоблог Архитек"/>
            <ProjectAndCostSection/>
            <Consultation />
        </>
    )
}