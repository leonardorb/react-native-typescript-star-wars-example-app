import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  pagination: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingTop: 10,
    paddingBottom: 10,
  },
  previous: {
    paddingLeft: 15,
  },
  status: {
    flex: 3,
  },
  next: {
    paddingRight: 15,
  },
  font: {
    color: '#ffe300',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
