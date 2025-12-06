import { Metadata } from 'next';
import articlesData from '../../../../components/Blog/Blog.json';
import Hero from '../../../../components/Home/Hero/Hero';
import './Article.scss';
import Link from 'next/link'; 
import Consultation from "../../../../components/Consultation/Consultation";
import QuizComponent from '../../../../components/QuizComponent/QuizComponent';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articlesData.articles.find(item => item.slug === slug);

  if (!article) {
    return {
      title: 'Статья не найдена',
      description: 'Запрошенная статья не существует или была удалена'
    };
  }

  return {
    title: article.seo?.title || article.title,
    description: article.seo?.description || article.preview.excerpt,
    keywords: article.seo?.keywords || [],
    openGraph: {
      title: article.seo?.title || article.title,
      description: article.seo?.description || article.preview.excerpt,
      url: `https://ваш-сайт.ru/blog/${slug}`,
      siteName: 'Ваш Сайт',
      images: [
        {
          url: article.preview.image,
          width: 800,
          height: 600,
          alt: article.title,
        },
      ],
      locale: 'ru_RU',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seo?.title || article.title,
      description: article.seo?.description || article.preview.excerpt,
      images: [article.preview.image],
    },
  };
}

export default async function BlogArticle({ params }) {
  const { slug } = await params;
  const article = articlesData.articles.find(item => item.slug === slug);

  if (!article) {
    return <div className="article-not-found">Статья не найдена</div>;
  }

  return (
    <>
      <Hero
        title={article.title}
        description={article.preview.excerpt}
        backgroundSrc={article.preview.image}
        buttonName="Оставить заявку"
      />
      
      <div className="article-container">
        <div className="back-button">
          <Link href="/blog">
            <p className="back-button__link">← Назад к статьям</p>
          </Link>
        </div>

        <div className="article-content">
          <div
            className="article-section"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        <div className="back-button">
          <Link href="/blog">
            <p className="back-button__link">← Назад к статьям</p>
          </Link>
        </div>
      </div>
      <QuizComponent />
      <Consultation />
    </>
  );
}