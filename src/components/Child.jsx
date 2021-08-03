import React, { useMemo } from 'react'

function Child({ count }) {
  return useMemo(() => {
    console.log('child render...')
    return (
      <>
        <div>count数量：{count}</div>
      </>
    )
  }, [count])
}

export default Child
