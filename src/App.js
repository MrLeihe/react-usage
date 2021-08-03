import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import Message from './views/Message'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/message">Message</Link>
          </div>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/message">
              <Message />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
