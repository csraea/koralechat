import { preventAutoHide } from "expo-splash-screen";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'flex-end',
    borderRadius: 25,
    borderColor: '#FA7268',
    borderWidth: 1
  },
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: "center",
    color: "grey",
    fontSize: 16,
    width: "200%"
  },
  button: {
    borderRadius: 50,
    marginLeft: 14,
    position: "relative",
    marginRight: -5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  }
})

export default styles;