const GIPHY_API_KEY = 'qgggLnVzjsXjEPOiP2cvVPHeDz6RQJHx'

export const fetchGifByQuery = async (q, limit = 1) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&limit=${limit}&q=${q}`
  )
  const data = response.json()
  console.log(data)
  return data
}
