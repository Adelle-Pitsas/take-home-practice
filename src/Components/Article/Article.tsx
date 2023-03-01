import React from "react";
import { cleanThumbnail } from "../../Interfaces/Interfaces";

const Article = ({ thumbnail } : {thumbnail: cleanThumbnail}) => {
  console.log(thumbnail)
  return (
    <div>
      <h3>{thumbnail.title}</h3>
      <h4>{thumbnail.subsection}</h4>
      <p>{thumbnail.publishedDate}</p>
    </div>
  )
}

export default Article