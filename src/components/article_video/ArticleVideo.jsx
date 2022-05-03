import React from 'react';
import './article-video.css';
import carpincho from '../../assets/carpincho.mp4'
const ArticleVideo = ({ title, description }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-video">
                <video
                    src={carpincho}
                    muted
                    autoPlay
                    loop
                    width="100%"
                    height="100%"></video>
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

export default ArticleVideo
