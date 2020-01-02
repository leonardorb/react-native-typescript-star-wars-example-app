import React, {FunctionComponent} from 'react'
import {ScrollView, Text} from 'react-native'
import {useFetch} from 'hooks/useFetch'
import {IPerson, peopleURL} from 'services/swapi'
import {Person} from 'components/people/Person'

interface IProps {}

export const People: FunctionComponent<IProps> = ({}): JSX.Element => {
  const {data, loading} = useFetch(peopleURL)
  return (
    <ScrollView>
      {loading ? (
        <Text>loading...</Text>
      ) : (
        (data as Array<IPerson>).map(person => (
          <Person key={person.name} person={person} />
        ))
      )}
    </ScrollView>
  )
}
