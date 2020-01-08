const SET_COUNT = 'SET_COUNT'
const NEXT = 'NEXT'
const PREVIOUS = 'PREVIOUS'

interface IPaginationSetCountAction {
  type: typeof SET_COUNT
  payload: {
    count: number
  }
}
interface IPaginationPreviousAction {
  type: typeof PREVIOUS
}

interface IPaginationNextAction {
  type: typeof NEXT
}

type IPaginationActions =
  | IPaginationSetCountAction
  | IPaginationPreviousAction
  | IPaginationNextAction

export interface IPaginationState {
  current_page: number
  count: number
}

export function setCountAction(count: number) {
  return {
    type: SET_COUNT,
    payload: {count},
  }
}

export function previousPageAction() {
  return {
    type: PREVIOUS,
  }
}

export function nextPageAction() {
  return {
    type: NEXT,
  }
}

const initialState = {
  current_page: 1,
  count: 0,
}

export default function paginationReducer(
  state = initialState,
  action: IPaginationActions,
) {
  switch (action.type) {
    case SET_COUNT:
      const {count} = action.payload
      return {
        ...state,
        count,
      }
    case PREVIOUS:
      return {
        ...state,
        current_page: state.current_page - 1 === 0 ? 1 : state.current_page - 1,
      }
    case NEXT:
      return {
        ...state,
        current_page: state.current_page + 1,
      }
    default:
      return state
  }
}
