import React, { useState, useEffect } from 'react'

function Message() {
  const [username, setUsername] = useState('stone')

  const changeTitle = () => {
    setUsername('pony')
  }

  useEffect(() => {
    console.log('useEffect', this)
    document.title = 'message is ' + username
  })

  return (
    <div>
      <h1>Message</h1>
      <p>1 Message for {username}</p>
      <button onClick={changeTitle}>change title</button>
    </div>
  )
}

export default Message
