import React from 'react'
import {View, Text} from 'react-native'
import {styles} from 'components/loading/Loading.style'

export const Loading = () => (
  <View>
    <Text style={styles.loading}>loading...</Text>
  </View>
)
