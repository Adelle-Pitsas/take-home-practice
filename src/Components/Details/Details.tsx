import React, { useEffect, useState } from "react";
import { cleanedArticle } from "../../Interfaces/Interfaces";
import {useParams, Link} from 'react-router-dom'

const Details = ({ articles } : {articles: cleanedArticle[]}) => {

  const { id } : any = useParams()
  const [ details, setDetails ] = useState<cleanedArticle>()

  useEffect(() => {
    const foundDetails = articles.find((article:cleanedArticle) => {
      return parseInt(id) === article.id})
      console.log(foundDetails)
    setDetails(foundDetails)
  },[])

  return (
    <div>
      <h3>{details?.title}</h3>
      <h4>{details?.byline}</h4>
      <img src={details?.image1}/>
      <p>{details?.abstract}</p>
      <p>Published: {details?.publishedDate}</p>
      <p>Updated on: {details?.updatedData || "N/A"}</p>
      <Link to={details?.url || '/*'}>Read the full article</Link>

    </div>
  )
}

export default Details