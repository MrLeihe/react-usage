import { Count } from './constants'

const initState = { count: 0 }

export function plusAction(dispatch) {
  return dispatch({
    type: Count.COUNT_PLUS,
  })
}

export function minusAction(dispatch) {
  return dispatch({
    type: Count.COUNT_MINUS,
  })
}

export function countReducer(state = initState, action) {
  switch (action.type) {
    case Count.COUNT_PLUS:
      return {
        ...state,
        count: state.count + 1,
      }
    case Count.COUNT_PLUS:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export function todoReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state
  }
}
