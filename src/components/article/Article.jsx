import React from 'react';
import './article.css';

const Article = ({ imgUrl, title, description }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="Workfolium.jpeg!" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{title}</p>
                    <h3>{description}</h3>
                </div>

            </div>
        </div>
    )
}

export default Article
