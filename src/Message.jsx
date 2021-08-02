import React, { useState, useEffect } from 'react'

function Message() {
  const [id, setId] = useState(0)

  const changeId = () => {
    setId(99)
  }

  function useAsyncMemo(factory, deps, initial) {
    const [val, setVal] = useState(initial)

    useEffect(() => {
      let cancel = false
      const promise = factory()
      promise.then((res) => {
        if (!cancel) {
          console.log('then---', res)
          setVal(res)
        }
      })
      return () => {
        cancel = true
        console.log('destory====', cancel)
      }
    }, deps)
    return val
  }

  function foo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('pony')
      }, 2000)
    })
  }

  const username = useAsyncMemo(foo, [id], 'stone')
  console.log('username----', username)

  useEffect(() => {
    document.title = 'message is ' + username
  })

  return (
    <div>
      <h1>Message</h1>
      <p>1 Message for {username}</p>
      <button onClick={changeId}>change id</button>
    </div>
  )
}

export default Message
