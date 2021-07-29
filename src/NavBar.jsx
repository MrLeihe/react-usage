import React, { useContext, useEffect, useState } from 'react'

const NavBar = ({ AppContext }) => {
  const { username } = useContext(AppContext)
  const [count, setCount] = useState(0)

  useEffect(() => {}, [count])

  useEffect(() => {}, [])

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>AwesomeSite</p>
      <p>{username}</p>
      <button onClick={handleClick}>add + 1</button>
    </div>
  )
}

export default NavBar
