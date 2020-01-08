import React, {FunctionComponent} from 'react'
import {View} from 'react-native'
import {useSelector} from 'react-redux'
import {useFetch} from 'hooks/useFetch'
import {peopleURL} from 'services/swapi'
import {IPaginationState} from 'store/reducers/pagination'
import {styles} from 'components/home/Home.style'
import {Header} from 'components/header/Header'
import {People} from 'components/people/People'
import {Pagination} from 'components/pagination/Pagination'

interface NavigationComponent extends FunctionComponent {
  navigationOptions: Object
}

export const Home: NavigationComponent = ({}): JSX.Element => {
  const {current_page} = useSelector<any, IPaginationState>(
    state => state.pagination,
  )
  const {count, data, loading} = useFetch(peopleURL(current_page))

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
