import React from 'react'
import Main from './Main'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

const AppContext = React.createContext({})

const App = () => {
  const [show, setShow] = React.useState(true)

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <Provider store={store}>
      <AppContext.Provider value={{ username: 'stone' }}>
        <div className="App">
          <button onClick={handleClick}>显示隐藏main</button>
          {show && <Main />}
        </div>
      </AppContext.Provider>
    </Provider>
  )
}

export default App
