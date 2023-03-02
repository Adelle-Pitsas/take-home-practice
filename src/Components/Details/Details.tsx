import React, { useEffect, useState } from "react";
import { cleanedArticle } from "../../Interfaces/Interfaces";
import {useParams, Link} from 'react-router-dom'
import './Details.css'

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
    <div className="details-container">
      <img src={details?.image1} className='details-img'/>
      <div className="details-info">
        <h3 className="article-title">{details?.title}</h3>
        <h4 className="article-byline">{details?.byline}</h4>
        <p>{details?.abstract}</p>
        <p>Published: {details?.publishedDate}</p>
        <p>Updated on: {details?.updatedData || "N/A"}</p>
        <Link to={details?.url || '/*'}>Read the full article</Link>
      </div>
    </div>
  )
}

export default Details