import React from "react";
import {cleanThumbnail} from '../../Interfaces/Interfaces'
import Article from '../Article/Article'
import './ArticleSection.css'


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
    <div className="section">
      <h2 className="section-header">{section}</h2>
      <div className="section-list">
        {sectionList}
      </div>
    </div>
  )
}

export default ArticleSection