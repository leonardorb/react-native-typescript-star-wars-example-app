const VIEW_PEOPLE = 'VIEW_PEOPLE'

interface IPeopleAction {
  type: typeof VIEW_PEOPLE
}

type PeopleReducerActionTypes = IPeopleAction

export default function PeopleReducer(
  state = {},
  action: PeopleReducerActionTypes,
) {
  switch (action.type) {
    default:
      return state
  }
}
