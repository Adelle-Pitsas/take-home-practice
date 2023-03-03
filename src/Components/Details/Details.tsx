import React, { useEffect, useState } from "react";
import { cleanedArticle } from "../../Interfaces/Interfaces";
import {useParams, Link} from 'react-router-dom'
import './Details.css'

const Details = ({ details } : {details: cleanedArticle | undefined}) => {

  return (
    <div className="details">
      <div className="details-container">
        <img src={details?.image1} className='details-img'/>
        <div className="details-info">
          <h3 className="article-title">{details?.title}</h3>
          <h4 className="article-byline">{details?.byline}</h4>
          <p className="details-p">{details?.abstract}</p>
          <p className="details-p">Published: {details?.publishedDate}</p>
          <p className="details-p">Updated on: {details?.updatedData || "N/A"}</p>
          <Link to={details?.url || '/*'}>Read the full article</Link>
        </div>
        <div className="button-container">
          <Link to='/'>
            <button className="home-btn">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Details