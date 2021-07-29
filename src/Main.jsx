import React from 'react'
import { connect } from 'react-redux'
import { plusAction, minusAction } from './store/reducers'

class Main extends React.Component {

  constructor(props) {
    super(props)
    console.log('props===', props)
  }

   handlePlus = () => {
     this.props.plus()
  }

   handleMinus = () => {
     this.props.minus()
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePlus}>plus</button>
        <div>{this.props.count}</div>
        <button onClick={this.handleMinus}>minus</button>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps===', state)
  return {
    count: state.countReducer.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => dispatch(plusAction()),
    minus: () => dispatch(minusAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
