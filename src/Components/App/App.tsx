import React, { useState, useEffect } from 'react';
import { getPopArticles } from '../../ApiCalls';
import { cleanArticles } from '../../util';
import { Routes, Route } from 'react-router-dom'
import Details from "../Details/Details"
import ArticleContainer from "../ArticleContainer/ArticleContainer"
import './App.css';

function App() {

  const [articles, setArticles] = useState([])


  useEffect(() => {
    getPopArticles()
    .then(data => setArticles(cleanArticles(data)))
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Take Home Scaries</h1>
      </header>
      <Routes>
        <Route path='/' element={<ArticleContainer />}/>
        <Route path='/:id' element={<Details /> } />
      </Routes>
    </div>
  );
}

export default App;
