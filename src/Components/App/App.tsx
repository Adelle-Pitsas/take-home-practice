import React, { useState, useEffect } from 'react';
import { getPopArticles } from '../../ApiCalls';
import { cleanArticles } from '../../util';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Details from "../Details/Details"
import ArticleContainer from "../ArticleContainer/ArticleContainer"
import { cleanedArticle, cleanThumbnail } from '../../Interfaces/Interfaces';
import './App.css';
import background from '../../Images/background.png'

function App() {

  const navigate = useNavigate()
  let location : any = useLocation()

  const [articles, setArticles] = useState<cleanedArticle[]>([])
  const [ allArticles, setAllArticles ] = useState<cleanedArticle[]>([])
  const [thumbnails, setThumbnails] = useState<cleanThumbnail[]>([])
  const [details, setDetails] = useState<cleanedArticle>()
  const [ search, setSearch ] = useState<string>("")


  useEffect(() => {
    getPopArticles()
    .then(data => {
      const cleaned = cleanArticles(data)
      setAllArticles(cleanArticles(data))
    })
  }, [])

  useEffect(() => {
    if(allArticles) {
      setArticles(allArticles)
    }
  }, [allArticles])

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

  const handleChange = (event: any) => {
    console.log("changed")
    setSearch(event.target.value)
  }

  useEffect(() => {
    if(search) {
      console.log(search)
      const searchFilter = allArticles.filter(article => {
        return article.title.toLowerCase().includes(search.toLowerCase())
      })
      console.log(searchFilter.length)
      setArticles(searchFilter)
    }
  }, [search])


  return (
    <div className="App" style={{backgroundImage: `url()${background}`}}>
      <header>
        <h1>New York Times: World News</h1>
      </header>
      <div>
        <form>
          <input 
            placeholder='Search an article by name'
            value={search}
            onChange={(event) => handleChange(event)}
          />
        </form>
      </div>
      <Routes>
        <Route path='/' element={<ArticleContainer thumbnails={thumbnails} getDetails={getDetails}/>}/>
        <Route path='/:id' element={<Details details={details}/> } />
      </Routes>
    </div>
  );
}

export default App;
