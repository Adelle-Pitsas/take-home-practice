import React from "react";
import { cleanThumbnail } from "../../Interfaces/Interfaces";
import ArticleSection from '../ArticleSection/ArticleSection'

const ArticleContainer = ({ thumbnails } : {thumbnails: cleanThumbnail[]}) => {
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
    />
  })

  console.log(articlesList)
  return(
    <div>
      {sections}
    </div>
  )
}

export default ArticleContainer