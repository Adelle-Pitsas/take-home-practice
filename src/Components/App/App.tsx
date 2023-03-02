import React, { useState, useEffect } from 'react';
import { getPopArticles } from '../../ApiCalls';
import { cleanArticles } from '../../util';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Details from "../Details/Details"
import ArticleContainer from "../ArticleContainer/ArticleContainer"
import { cleanedArticle, cleanThumbnail } from '../../Interfaces/Interfaces';
import './App.css';

function App() {

  const navigate = useNavigate()
  let location : any = useLocation()

  const [articles, setArticles] = useState<cleanedArticle[]>([])
  const [thumbnails, setThumbnails] = useState<cleanThumbnail[]>([])
  const [details, setDetails] = useState<cleanedArticle>()


  useEffect(() => {
    getPopArticles()
    .then(data => {
      const cleaned = cleanArticles(data)
      setArticles(cleanArticles(data))
    })
  }, [])

  useEffect(() => {
    if(articles) {
      const filtered = articles.map((article: cleanedArticle) => {
        return {
          title: article.title,
          section: article.section,
          thumbnailImg: article.thumbnailImg,
          subsection: article.subsection,
          publishedDate: article.publishedDate,
          id: article.id
        }
      })
      setThumbnails(filtered)
    }
  }, [articles])

  const getDetails = (id: number) => {
    const foundDetails = articles.find((article:cleanedArticle) => {
      return id === article.id})
    if(foundDetails) {
      setDetails(foundDetails)
    }
  }

  useEffect(() => {
    if(details) {
      navigate(`${details.id}`)
    }
  }, [details])

  useEffect(() => {
    if(articles) {
      getDetails(parseInt(location.pathname.slice(1)))
    }
  }, [articles])


  return (
    <div className="App">
      <header>
        <h1>Take Home Scaries</h1>
      </header>
      <Routes>
        <Route path='/' element={<ArticleContainer thumbnails={thumbnails} getDetails={getDetails}/>}/>
        <Route path='/:id' element={<Details details={details}/> } />
      </Routes>
    </div>
  );
}

export default App;
