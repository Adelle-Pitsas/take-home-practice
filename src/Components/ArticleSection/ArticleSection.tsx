import React from "react";
import {cleanThumbnail} from '../../Interfaces/Interfaces'
import Article from '../Article/Article'


const ArticleSection = ({ thumbnails, section, getDetails } : {
  thumbnails: cleanThumbnail[], 
  section: string, 
  getDetails: (id:number)=> void
}) => {
  const sectionList = thumbnails.map((article: cleanThumbnail) => {
    return <Article 
      thumbnail={article}
      getDetails={getDetails}
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