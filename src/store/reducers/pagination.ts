const NEXT = 'NEXT'
const PREVIOUS = 'PREVIOUS'

interface IPaginationPreviousAction {
  type: typeof PREVIOUS
}

interface IPaginationNextAction {
  type: typeof NEXT
}

type IPaginationActions = IPaginationPreviousAction | IPaginationNextAction

const initialState = {
  current_page: 0,
}

export default function paginationReducer(
  state = initialState,
  action: IPaginationActions,
) {
  switch (action.type) {
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
