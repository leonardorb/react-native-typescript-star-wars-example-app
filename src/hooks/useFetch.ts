import {useEffect, useState} from 'react'
import {IPerson} from 'services/swapi'

export interface IState {
  count: number
  data: [IPerson] | []
  loading: boolean
}

export const useFetch = (url: string): IState => {
  const [state, setState] = useState<IState>({
    count: 0,
    data: [],
    loading: true,
  })

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(parsedResponse => {
        setTimeout(() => {
          const {count, results} = parsedResponse
          setState({count, data: results, loading: false})
        }, 500)
      })
  }, [url])

  return state
}
