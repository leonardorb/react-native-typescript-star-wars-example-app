import {compose, createStore, applyMiddleware, Middleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'store/reducers/index'

const middlewares: Middleware[] = [thunk]
const enhancer = compose(applyMiddleware(...middlewares))
const initialState = {}

const store = createStore(rootReducer, initialState, enhancer)

export default store
