import { Count } from './constants'
import initialState from './initialState'

export function plusAction() {
  return {
    type: Count.COUNT_PLUS,
  }
}

export function minusAction() {
  return {
    type: Count.COUNT_MINUS,
  }
}

export function countReducer(state = initialState, action) {
  console.log('countReducer===', state, action)
  switch (action.type) {
    case Count.COUNT_PLUS:
      console.log('COUNT_PLUS===')
      return {
        ...state,
        count: state.count + 1,
      }
    case Count.COUNT_MINUS:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
