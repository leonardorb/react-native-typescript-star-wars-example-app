import React, {FunctionComponent} from 'react'
import {Text, View} from 'react-native'
import {
  NavigationScreenProp,
  NavigationParams,
  withNavigation,
} from 'react-navigation'
import {IPerson} from 'services/swapi'

interface INavigationParams extends NavigationParams {}

interface IProps {
  navigation: NavigationScreenProp<undefined, INavigationParams>
}

interface NavigationComponent<IProps> extends FunctionComponent<IProps> {
  navigationOptions: Object
}

const PersonInfoComponent: NavigationComponent<IProps> = ({
  navigation,
}): JSX.Element => {
  const person: IPerson = navigation.getParam('person')
  return (
    <View>
      <Text>Name: {person.name}</Text>
    </View>
  )
}

PersonInfoComponent.navigationOptions = ({
  navigation,
}: {
  navigation: NavigationScreenProp<undefined, INavigationParams>
}) => {
  const person: IPerson = navigation.getParam('person')
  return {
    title: person.name,
  }
}

export const PersonInfo = withNavigation(PersonInfoComponent)
