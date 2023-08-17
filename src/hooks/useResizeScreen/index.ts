import { debounce } from '@utils/debounce'
import { useEffect, useState } from 'react'

export default function useResizeScreen() {
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 800,
  })

  const [isMobile, setIsMobile] = useState(false)

  function changeWindowSize() {
    if (!window) return

    setIsMobile(window.innerHeight > window.innerWidth)
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    window.addEventListener('resize', debounce(changeWindowSize))

    if (window) {
      setWindowSize({
        ...windowSize,
        width: window.innerWidth,
        height: window.innerHeight,
      })
      setIsMobile(window.innerHeight > window.innerWidth)
    }

    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { size: windowSize, isMobile }
}
