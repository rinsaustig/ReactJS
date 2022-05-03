import React from 'react';
import './blog.css';
import { Article, ArticleVideo } from '../../components';
import { art, design } from './imports'
const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="skills">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">Works i've done in various aspects of design:</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                   <ArticleVideo title="Motion Graphics" description="In this case representing a Capibara, some native fauna from where I was born in South America" />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={art} title="Art" description="Drawing on freehand and then digilaty upgrade an artistic design of any thematic."/>
                    <Article imgUrl={design} title="Design" description="Using a photography and converting it into a graphic piece design."/>
                   
                </div>

            </div>
        </div>
    )
}

export default Blog
