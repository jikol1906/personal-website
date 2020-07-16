import { useLayoutEffect, useState } from "react"

export default ref => {
  const [elemIsInViewport, setElemIsInViewport] = useState(false)

  useLayoutEffect(() => {
    let elemTop = ref.current.getBoundingClientRect().top
    const onScroll = () => {
      const scrollPos = window.innerHeight + window.scrollY
      if (elemTop < scrollPos) {
        setElemIsInViewport(true)
        window.removeEventListener("scroll", onScroll)
        window.removeEventListener("resize", onResize)
      }
    }
    const onResize = () => {
      elemTop = ref.current.getBoundingClientRect().top
    }
    window.addEventListener("scroll", onScroll)
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [ref])

  return elemIsInViewport
}
