import React from "react";
import {cleanThumbnail} from '../../Interfaces/Interfaces'
import Article from '../Article/Article'


const ArticleSection = ({ thumbnails, section } : {thumbnails: cleanThumbnail[], section: string}) => {
  const sectionList = thumbnails.map((article: cleanThumbnail) => {
    return <Article 
      thumbnail={article}
    />
  })
  return(
    <div>
      <h2>{section}</h2>
      <div>
        {sectionList}
      </div>
    </div>
  )
}

export default ArticleSection