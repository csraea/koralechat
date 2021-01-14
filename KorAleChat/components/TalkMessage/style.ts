import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    
  },
  messageBox: {
    borderRadius: 5,
    padding: 10,
    margin: -6
  },
  name: {
    color: '#FA7268',
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {

  },
  time: {
    alignSelf: "flex-end",
    color: 'grey',
    marginBottom: -6,
    fontSize: 10
  }
});

export default styles;