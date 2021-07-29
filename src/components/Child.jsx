import { memo } from 'react'

const Child = memo(({ onChangeCount, onChange }) => {
  console.log('child render...')
  return (
    <>
      <button onClick={onChangeCount}>增加count</button>
      <input onChange={onChange}></input>
    </>
  )
})

export default Child
