import {useEffect, useState} from 'react'
import {IPerson} from 'services/swapi'

export interface IState {
  data: [IPerson] | []
  loading: boolean
}

export const useFetch = (url: string): IState => {
  const [state, setState] = useState<IState>({data: [], loading: true})

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(parsedResponse => {
        setTimeout(() => {
          setState({data: parsedResponse.results, loading: false})
        }, 500)
      })
  }, [url])

  return state
}
