import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { connect } from 'react-redux'
import { plusAction, minusAction } from './store/reducers'

const Main = (props) => {
  const { count, plus, minus } = props

  const handlePlus = () => {
    plus()
  }

  const handleMinus = () => {
    minus()
  }

  return (
    <div>
      <button onClick={handlePlus}>plus</button>
      <div>{count}</div>
      <button onClick={handleMinus}>minus</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    plus: plusAction(dispatch),
    minus: minusAction(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
