import React, {FunctionComponent} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {
  IPaginationState,
  previousPageAction,
  nextPageAction,
} from 'store/reducers/pagination'
import {styles} from 'components/pagination/Pagination.style'

interface IProps {
  count: number
}

export const Pagination: FunctionComponent<IProps> = ({count}) => {
  const pagination = useSelector<any, IPaginationState>(
    state => state.pagination,
  )
  const dispatch = useDispatch()

  const previousPage = () => {
    dispatch(previousPageAction())
  }

  const nextPage = () => {
    dispatch(nextPageAction())
  }

  return (
    <View style={styles.pagination}>
      <View style={styles.previous}>
        <TouchableHighlight onPress={previousPage}>
          <Text style={styles.font}>Previous</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.status}>
        <Text style={styles.font}>
          {pagination.current_page}-10 of {count} characters
        </Text>
      </View>
      <View style={styles.next}>
        <TouchableHighlight onPress={nextPage}>
          <Text style={styles.font}>Next</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
