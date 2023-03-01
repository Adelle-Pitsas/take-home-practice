import { getPopArticles } from "./ApiCalls"
import { rawData } from './Interfaces/Interfaces'

export const cleanArticles = (data: any) => {
    const filtered = data.results.filter((article : rawData) => {
      return article.title !== ""
    })
    return filtered.map((article : rawData, index: number) => {
      return {
        title: article.title,
        section: article.section,
        subsection: article.subsection,
        publishedDate: article.published_date,
        id: index
      }
    })
  }