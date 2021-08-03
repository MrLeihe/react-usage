import React, { useState, useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'plus':
      return { count: state.count + 1 }
    case 'minus':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <button onClick={() => dispatch({ type: 'plus' })}>plus</button>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: 'minus' })}>minus</button>
    </div>
  )
}

export default Home
