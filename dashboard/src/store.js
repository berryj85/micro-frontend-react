import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './Reducer'

const initialState = {}
const enhancers = []
const middleware = [thunk]

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

export default createStore(reducers, initialState, composedEnhancers)
