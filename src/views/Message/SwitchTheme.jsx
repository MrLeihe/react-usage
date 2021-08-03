import React, { useMemo } from 'react'

function SwitchTheme({ onThemeChange }) {
  return useMemo(() => {
    console.log('SwitchTheme render....')
    return <button onClick={onThemeChange}>切换主题</button>
  }, [onThemeChange])
}

export default SwitchTheme
