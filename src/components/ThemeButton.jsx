import React, { useContext } from 'react'
import ThemeContext from '../context'

function ThemeButton() {
  const theme = useContext(ThemeContext)
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      theme context
    </button>
  )
}

export default ThemeButton
