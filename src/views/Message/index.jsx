import React, { useState, useCallback, useEffect } from 'react'
import ThemeContext, { themes } from '@/context'
import MessageContext from './context'
import ThemeButtom from '@/components/ThemeButton'
import SwitchTheme from './SwitchTheme'

function Message() {
  const [theme, setTheme] = useState(themes.dark)
  const [count, setCount] = useState(0)

  const handleThemeChange = useCallback(() => {
    setTheme((preTheme) =>
      preTheme === themes.light ? themes.dark : themes.light
    )
  }, [])

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     console.log('setInterval---', count, id)
  //     setCount((c) => c + 1)
  //   }, 1000)
  //   return () => {
  //     clearInterval(id)
  //   }
  // }, [])

  const handleChangeCount = () => {
    setCount((c) => c + 1)
  }

  console.log('count===', count)

  return (
    <MessageContext.Provider value={{ onThemeChange: handleThemeChange }}>
      <h1>Message</h1>
      <button onClick={handleChangeCount}>change count</button>
      <p>计数：{count}</p>
      <SwitchTheme onThemeChange={handleThemeChange} />
      <ThemeContext.Provider value={theme}>
        <ThemeButtom />
      </ThemeContext.Provider>
    </MessageContext.Provider>
  )
}

export default Message
