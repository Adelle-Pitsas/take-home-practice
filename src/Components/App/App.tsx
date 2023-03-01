import React, { useState, useEffect } from 'react';
import { getPopArticles } from '../../ApiCalls';
import { cleanArticles } from '../../util'
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
    </div>
  );
}

export default App;
