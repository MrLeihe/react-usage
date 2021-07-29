import React from 'react'
import ThemeContext from '../context'

class ThemeButton extends React.Component {
  state = {
    number: 0,
  }
  componentDidMount() {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.setState({ number: this.state.number + 1 })
        console.log(this.state.number)
      }, 1000)
    }
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          return <button style={value}>context</button>
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default ThemeButton
