import { getPopArticles } from "./ApiCalls"
import { rawData } from './Interfaces/Interfaces'

export const cleanArticles = (data: any) => {
    const filtered = data.results.filter((article : rawData) => {
      return article.title !== ""
    })
    return filtered.map((article : rawData, index: number) => {
      return {
        title: article.title,
        byline: article.byline,
        abstract: article.abstract,
        section: formatProperNouns(article.section),
        subsection: formatProperNouns(article.subsection),
        publishedDate: getCleanedDate(new Date(article.published_date)),
        updatedDate: article.updated_date,
        url: article.url,
        id: index
      }
    })
  }

  const getCleanedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}/${year}`
  }

  const formatProperNouns = (word: string) => {
    if(word === "middleeast") {
      return "Middle East"
    } else if (word === "us") {
      return "U.S."
    } else {
      const capital = word.charAt(0).toUpperCase()
      return `${capital}${word.substring(1)}`
    }
  }