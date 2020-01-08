import {combineReducers} from 'redux'
import paginationReducer from 'store/reducers/pagination'

const rootReducer = combineReducers({
  pagination: paginationReducer,
})

export default rootReducer
