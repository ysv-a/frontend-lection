import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [response, setResponse] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setResponse(json)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [url])

  return { response, error }
}
