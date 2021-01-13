import { StyleSheet } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderBottomLeftRadius: 200,
  },
  leftTalkContainer: {
    flexDirection: 'row',
  },
  midTalkContainer: {
    justifyContent: 'space-around',
     
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
  },
  time: {
    marginTop: 6,
    fontSize: 14,
    color: 'grey'
  },
});

export default styles;