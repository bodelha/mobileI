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
      alignSelf: 'center',
      color: '#555'
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
    dropdown: {
      borderWidth: 1,
      borderColor: '#ccc',
      width: '80%',
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      alignSelf: 'center',
      color: '#555',
    },
    dropdownOpened: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      zIndex:999
    }
  });

export default loginStyles;