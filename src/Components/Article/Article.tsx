import React from "react";
import { cleanThumbnail } from "../../Interfaces/Interfaces";
import './Article.css'

const Article = ({ thumbnail, getDetails } : {
  thumbnail: cleanThumbnail, 
  getDetails: (id:number)=> void
}) => {
  return (
    <div className="article" onClick={() => getDetails(thumbnail.id)}>
      <img className="thumbnail-img" src={thumbnail.thumbnailImg}/>
      <h3>{thumbnail.title}</h3>
      <h4>{thumbnail.subsection}</h4>
      <p>{thumbnail.publishedDate}</p>
    </div>
  )
}

export default Article