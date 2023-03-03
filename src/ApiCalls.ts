import { key } from "./apiKeys"


export const getPopArticles = async () => {
  const response = await fetch(`https://ap.nytimes.com/svc/topstories/v2/world.json?api-key=${key}`)
  if (response.status > 400) {
    throw new Error
  } else {
    return response.json()
  }
}

