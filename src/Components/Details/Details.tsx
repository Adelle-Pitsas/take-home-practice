import React, { useEffect, useState } from "react";
import { cleanedArticle } from "../../Interfaces/Interfaces";
import {useParams} from 'react-router-dom'

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

    </div>
  )
}

export default Details