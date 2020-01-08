import React, {FunctionComponent} from 'react'
import {ScrollView, View} from 'react-native'
import {IPerson} from 'services/swapi'
import {styles} from 'components/people/People.style'
import {Loading} from 'components/loading/Loading'
import {Person} from 'components/people/Person'

interface IProps {
  data: [IPerson] | []
  loading: boolean
}

export const People: FunctionComponent<IProps> = ({
  data,
  loading,
}): JSX.Element => {
  return (
    <>
      <View style={styles.people}>
        <ScrollView>
          {loading ? (
            <Loading />
          ) : (
            (data as Array<IPerson>).map(person => (
              <Person key={person.name} person={person} />
            ))
          )}
        </ScrollView>
      </View>
    </>
  )
}
