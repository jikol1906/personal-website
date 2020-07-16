import { useState, useEffect } from "react"

export default query => {
  const [matches, setMatches] = useState(null)

  useEffect(() => {
    const list = window.matchMedia(query)
    const handler = list => {
      setMatches(list.matches)
    }
    handler(list)
    list.addListener(handler)
    return () => {
      list.removeListener(handler)
    }
  }, [query])

  return matches;
}
