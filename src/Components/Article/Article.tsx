import React from "react";
import { cleanThumbnail } from "../../Interfaces/Interfaces";
import { Link } from 'react-router-dom'

const Article = ({ thumbnail } : {thumbnail: cleanThumbnail}) => {
  console.log(thumbnail)
  return (
    <Link to={`/${thumbnail.id}`}>
      <img src={thumbnail.thumbnailImg}/>
      <h3>{thumbnail.title}</h3>
      <h4>{thumbnail.subsection}</h4>
      <p>{thumbnail.publishedDate}</p>
    </Link>
  )
}

export default Article