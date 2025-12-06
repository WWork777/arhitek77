import { notFound, redirect } from "next/navigation";
import CatalogItem from "../../../../components/Catalog/CatalogItem";
import catalogItems from "../../../../public/data/MainCatalogCard.json";

import { seoData } from "../../utils/SeoData";

async function getProjectData(slug) {
  return catalogItems.find((item) => item.slug === slug);
}

export default async function CatalogItemPage({ params }) {
  const catalogItem = await getProjectData(params.slug);

  if (!catalogItem) {
    redirect("/");
  }

  return <CatalogItem catalogItem={catalogItem} />;
}

export async function generateStaticParams() {
  return catalogItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const catalogItem = await getProjectData(params.slug);

  if (!catalogItem) {
    return {
      title: "Страница не найдена",
      description: "Запрашиваемая страница не существует",
    };
  }

  const seo = seoData.projects.getProject(catalogItem.slug);
  console.log(seo);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,

    openGraph: {
      title: seo.og_title,
      description: seo.og_description,
      locale: seo.og_locale,
      type: seo.og_type,
      url: seo.og_url,
      siteName: seo.og_site_name,
      images: [
        {
          url: seo.og_img_url,
          width: seo.og_img_width,
          height: seo.og_img_height,
          alt: seo.og_img_alt,
        },
      ],
    },

    article: {
      publishedTime: seo.article_modified_time,
      modifiedTime: seo.article_modified_time,
      authors: [seo.article_publisher],
    },

    twitter: {
      card: seo.twitter_card,
      site: seo.twitter_site,
      creator: seo.twitter_site,
    },

    other: {
      SKYPE_TOOLBAR: seo.SKYPE_TOOLBAR,
    },
  };
}
