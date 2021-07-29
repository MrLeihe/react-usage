import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render() {
    return (
      <div
        style={{ width: 300, height: 300, backgroundColor: 'cyan' }}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    )
  }
}
