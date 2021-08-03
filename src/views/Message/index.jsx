import React, { useState, useCallback, useRef, useEffect } from 'react'
import ThemeContext, { themes } from '@/context'
import ThemeButtom from '@/components/ThemeButton'
import SwitchTheme from './SwitchTheme'
import { useAsyncMemo } from '@/hooks'

function Message() {
  const [id, setId] = useState(0)
  const [theme, setTheme] = useState(themes.dark)
  const countRef = useRef({ count: 0 })

  function foo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('pony')
      }, 2000)
    })
  }

  const username = useAsyncMemo(foo, [id], 'stone')

  const handleThemeChange = useCallback(() => {
    setTheme((preTheme) =>
      preTheme === themes.light ? themes.dark : themes.light
    )
  }, [])

  useEffect(() => {
    return () => {
      console.log('cb====', countRef.current.count)
      // countRef.current.count = 0
    }
  })

  const handleChangeCount = () => {
    countRef.current.count = countRef.current.count + 1
    console.log('handleChangeCount==', countRef.current.count)
  }

  return (
    <div>
      <h1>Message</h1>
      <p>1 Message for {username}</p>
      <button onClick={handleChangeCount}>改变count</button>
      <p>计数：{countRef.current.count}</p>
      <SwitchTheme onThemeChange={handleThemeChange} />
      <ThemeContext.Provider value={theme}>
        <ThemeButtom />
      </ThemeContext.Provider>
    </div>
  )
}

export default Message
