import React from 'react'
import Mouse from './Mouse'
import Cat from './Cat'

export default class MouseTracker extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    if (this.props.userId !== prevProps.userId) {
      console.log('userId change')
    }
  }

  render() {
    return (
      <div>
        {/* {this.props.userId} */}
        <h1>移动鼠标🖱</h1>
        <Mouse render={(state) => <Cat mouse={state} />}></Mouse>
      </div>
    )
  }
}
