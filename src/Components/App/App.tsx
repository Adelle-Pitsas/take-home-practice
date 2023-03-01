import React, { useState, useEffect } from 'react';
import { getPopArticles } from '../../ApiCalls';
import { cleanArticles } from '../../util';
import { Routes, Route } from 'react-router-dom'
import Details from "../Details/Details"
import ArticleContainer from "../ArticleContainer/ArticleContainer"
import { cleanedArticle, cleanThumbnail } from '../../Interfaces/Interfaces';
import './App.css';

function App() {

  const [articles, setArticles] = useState<cleanedArticle[]>([])
  const [thumbnails, setThumbnails] = useState<cleanThumbnail[]>([])


  useEffect(() => {
    getPopArticles()
    .then(data => setArticles(cleanArticles(data)))
  }, [])

  useEffect(() => {
    if(articles) {
      const filtered = articles.map((article: cleanedArticle) => {
        return {
          title: article.title,
          section: article.section,
          subsection: article.subsection,
          publishedDate: article.publishedDate,
          id: article.id
        }
      })
      setThumbnails(filtered)
    }
  }, [articles])


  return (
    <div className="App">
      <header>
        <h1>Take Home Scaries</h1>
      </header>
      <Routes>
        <Route path='/' element={<ArticleContainer thumbnails={thumbnails}/>}/>
        <Route path='/:id' element={<Details articles={articles}/> } />
      </Routes>
    </div>
  );
}

export default App;
