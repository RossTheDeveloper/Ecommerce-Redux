import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

	let result = next(action)

  return result
  
}

export default (initialState={}) => {
	return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)
}
