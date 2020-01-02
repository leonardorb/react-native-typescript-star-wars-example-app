import React, {FunctionComponent} from 'react'
import {Text, TouchableHighlight} from 'react-native'
import {IPerson} from 'services/swapi'
import {
  NavigationScreenProp,
  NavigationParams,
  withNavigation,
} from 'react-navigation'

interface INavigationParams extends NavigationParams {}

interface IProps {
  person: IPerson
  navigation: NavigationScreenProp<undefined, INavigationParams>
}

const PersonComponent: FunctionComponent<IProps> = ({
  person,
  navigation,
}: IProps): JSX.Element => {
  const onPress = () => {
    navigation.navigate('PersonInfo', {person})
  }

  return (
    <TouchableHighlight key={person.name} onPress={onPress}>
      <Text key={person.name}>{person.name}</Text>
    </TouchableHighlight>
  )
}

export const Person = withNavigation(PersonComponent)
