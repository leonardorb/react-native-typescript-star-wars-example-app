import {AppRegistry} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Home} from 'components/home/Home'
import {PersonInfo} from 'components/people/PersonInfo'
import {name as appName} from './app.json'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  PersonInfo: {screen: PersonInfo},
})

const App = createAppContainer(MainNavigator)

AppRegistry.registerComponent(appName, () => App)
