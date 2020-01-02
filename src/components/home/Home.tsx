import React, {FunctionComponent} from 'react'
import {View} from 'react-native'
import {styles} from 'components/home/Home.style'
import {Header} from 'components/header/Header'
import {People} from 'components/people/People'

// interface IProps {
//   navigationOptions: Object
// }

interface NavigationComponent extends FunctionComponent {
  navigationOptions: Object
}

export const Home: NavigationComponent = ({}): JSX.Element => {
  return (
    <>
      <View style={styles.app}>
        <Header />
        <People />
      </View>
    </>
  )
}

Home.navigationOptions = {
  header: null,
}
