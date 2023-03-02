import React from "react";
import { cleanThumbnail } from "../../Interfaces/Interfaces";
import ArticleSection from '../ArticleSection/ArticleSection'
import './ArticleContainer.css'

const ArticleContainer = ({ thumbnails, getDetails } : {
  thumbnails: cleanThumbnail[], 
  getDetails: (id:number)=> void 
}) => {
  const articlesList = thumbnails.reduce((acc:any, article) => {
    if(!acc[article.section]) {
      acc[article.section] = []
    } 
    acc[article.section].push(article)
    return acc
  }, {})

  const sections = Object.keys(articlesList).map(section => {
    return <ArticleSection
      section={section} 
      thumbnails={articlesList[section]}
      getDetails={getDetails}
    />
  })

  return(
    <div className="article-container">
      {sections}
    </div>
  )
}

export default ArticleContainer