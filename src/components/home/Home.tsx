import React, {FunctionComponent} from 'react'
import {View} from 'react-native'
import {useFetch} from 'hooks/useFetch'
import {peopleURL} from 'services/swapi'
import {styles} from 'components/home/Home.style'
import {Header} from 'components/header/Header'
import {People} from 'components/people/People'
import {Pagination} from 'components/pagination/Pagination'

interface NavigationComponent extends FunctionComponent {
  navigationOptions: Object
}

export const Home: NavigationComponent = ({}): JSX.Element => {
  const {count, data, loading} = useFetch(peopleURL)

  return (
    <>
      <View style={styles.app}>
        <Header />
        <People data={data} loading={loading} />
        <Pagination count={count} />
      </View>
    </>
  )
}

Home.navigationOptions = {
  header: null,
}
