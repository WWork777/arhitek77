'use client'
import './Blog.scss'
import articlesData from './Blog.json'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

function BlogLayout() {
    const [searchQuery, setSearchQuery] = useState('')  
    const [activeTag, setActiveTag] = useState(null)  
    const [currentPage, setCurrentPage] = useState(1)  
    const postsPerPage = 6  

    const allTags = Array.from(
        new Set(
            articlesData.articles
                .flatMap(article => article.tag?.tags || [])
        )
    )

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [currentPage])

    const filteredArticles = articlesData.articles.filter(article => {
        const matchesTitle = article.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesTag = activeTag ? (article.tag?.tags || []).includes(activeTag) : true
        return matchesTitle && matchesTag
    })

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredArticles.slice(indexOfFirstPost, indexOfLastPost)

    const handleTagClick = (e, tag) => {
        e.preventDefault(); 
        setActiveTag(prev => (prev === tag ? null : tag)); 
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredArticles.length / postsPerPage);

    return (
        <div className="blog">
            <div className='blog__header'>
                <input
                    type="text"
                    placeholder="Поиск по названию..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="blog__search"
                />
                {/* <div className="blog__tags">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            className={`blog__tag-button ${activeTag === tag ? 'active' : ''}`}
                            onClick={(e) => handleTagClick(e, tag)}
                        >
                            {tag} ({articlesData.articles.filter(article => article.tag?.tags?.includes(tag)).length})
                        </button>
                    ))}
                </div> */}
            </div>

            <div className="blog__list">
                {currentPosts.length === 0 ? (
                    <p className="blog__no-results">Статьи не найдены</p> 
                ) : (
                    currentPosts.map(article => (
                        <Link href={`/blog/${article.slug}`} key={article.id} className="blog__card">
                            <Image width={500} height={350} src={article.preview.image} alt={article.preview.title} />
                            <h2>{article.preview.title}</h2>
                            <p>{article.preview.excerpt}</p>
                            {article.tag?.tags && article.tag.tags.length > 0 && (
                                <div className="blog__tags-list">
                                    {article.tag.tags.map(tag => (
                                        <span 
                                            key={tag} 
                                            className="blog__tag"
                                            // onClick={(e) => handleTagClick(e, tag)} 
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </Link>
                    ))
                )}
            </div>

            <div className="blog__pagination">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className='blog__page-button-prev'>
                    Назад
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`blog__page-button ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                 <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className='blog__page-button-next'>
                    Вперед
                </button>
            </div>
        </div>
    );
}

export default BlogLayout;
