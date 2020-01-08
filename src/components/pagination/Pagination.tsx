import React, {FunctionComponent, useEffect} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {
  IPaginationState,
  nextPageAction,
  previousPageAction,
  setCountAction,
} from 'store/reducers/pagination'
import {styles} from 'components/pagination/Pagination.style'

interface IProps {
  count: number
}

export const Pagination: FunctionComponent<IProps> = ({count}) => {
  const {current_page, count: total} = useSelector<any, IPaginationState>(
    state => state.pagination,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCountAction(count))
  }, [count, dispatch])

  const isFirstPage = current_page === 1
  const initial = current_page === 1 ? 1 : (current_page - 1) * 10 + 1
  const isLastPage = current_page * 10 > total
  const final = current_page === 1 ? 10 : isLastPage ? total : current_page * 10

  const previousPage = () => {
    dispatch(previousPageAction())
  }

  const nextPage = () => {
    dispatch(nextPageAction())
  }

  return (
    <View style={styles.pagination}>
      <View style={styles.previous}>
        <TouchableHighlight onPress={previousPage} disabled={isFirstPage}>
          <Text style={styles.font}>Previous</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.status}>
        <Text style={styles.font}>
          {initial}-{final} of {total} characters
        </Text>
      </View>
      <View style={styles.next}>
        <TouchableHighlight onPress={nextPage} disabled={isLastPage}>
          <Text style={styles.font}>Next</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}
