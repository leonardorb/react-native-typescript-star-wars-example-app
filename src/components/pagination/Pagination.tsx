import React, {FunctionComponent} from 'react'
import {View, Text} from 'react-native'
import {useSelector} from 'react-redux'
import {styles} from 'components/pagination/Pagination.style'

interface IProps {
  count: number
}

export const Pagination: FunctionComponent<IProps> = ({count}) => {
  const pagination = useSelector<any, Object>(state => state.paginationReducer)

  console.log(pagination)

  return (
    <View>
      <Text style={styles.pagination}>1-10 of {count} characters</Text>
    </View>
  )
}
