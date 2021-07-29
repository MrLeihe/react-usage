import { useState, useEffect } from 'react'
import throttle from '../lib/throttle'

export const useResizeHook = () => {
  console.log('use custom hook')
  const [event, setEvent] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const onResizeChange = throttle(
      (event) => {
        setEvent({
          width: event.target.innerWidth,
          height: event.target.innerHeight,
        })
      },
      1000,
      true
    )
    window.addEventListener('resize', onResizeChange, true)
    return () => {
      window.removeEventListener('resize', onResizeChange, true)
    }
  }, [])

  return event
}
