import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useRouteAnimation() {
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsLoaded(false)

    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 50)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return isLoaded
}
