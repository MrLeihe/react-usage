import React from 'react'
import Main from './Main'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

const App = () => {
  const [show, setShow] = React.useState(true)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <Provider store={store}>
        <div className="App">
          <button onClick={handleClick}>显示隐藏main</button>
          {show && <Main />}
        </div>
    </Provider>
  )
}

export default App
