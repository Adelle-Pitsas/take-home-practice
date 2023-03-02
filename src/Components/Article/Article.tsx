import React from "react";
import { cleanThumbnail } from "../../Interfaces/Interfaces";

const Article = ({ thumbnail, getDetails } : {
  thumbnail: cleanThumbnail, 
  getDetails: (id:number)=> void
}) => {
  return (
    <div onClick={() => getDetails(thumbnail.id)}>
      <img src={thumbnail.thumbnailImg}/>
      <h3>{thumbnail.title}</h3>
      <h4>{thumbnail.subsection}</h4>
      <p>{thumbnail.publishedDate}</p>
    </div>
  )
}

export default Article