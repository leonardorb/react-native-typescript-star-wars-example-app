import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {Home} from 'components/home/Home'
import {PersonInfo} from 'components/people/PersonInfo'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  PersonInfo: {screen: PersonInfo},
})

const App = createAppContainer(MainNavigator)

export default App
