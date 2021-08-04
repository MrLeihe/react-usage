import React from 'react'

function SwitchTheme({ onThemeChange }) {
  console.log('SwitchTheme render....')
  return <button onClick={onThemeChange}>切换主题</button>
}

export default React.memo(SwitchTheme)
