import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eee',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: '80%',
      backgroundColor: '#fff',
    },
    button: {
      backgroundColor: '#e89ac7',
      borderRadius: 5,
      padding: 10,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 75
    },
    buttonText: {
      color: '#fff',
      fontSize: 25,
    },
    addButton: {
      width: '70%',
      padding: '15%',
      color: 'e89ac7',
      alignItems: 'center'
    },
    scrollItem:{
        width: '100%',
        height: 50,
        padding: 10,
        backgroundColor: '#fff',
    }
  });

export default loginStyles;