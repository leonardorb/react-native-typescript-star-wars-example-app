import {combineReducers} from 'redux'
import paginationReducer from 'store/reducers/pagination'

const rootReducer = combineReducers({
  paginationReducer,
})

export default rootReducer
