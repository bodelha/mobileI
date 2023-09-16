import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import loginStyles from './styles';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === '' && password === '') {
      navigation.navigate('characters');
    } else {
      alert('E-mail ou senha inválidos!')
    }
  }

  return (
    <View style={loginStyles.container}>
      <TextInput
        style={loginStyles.input}
        placeholder='E-mail'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={loginStyles.input}
        placeholder='Senha'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
        <Text style={loginStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={loginStyles.addButton} onPress={() => navigation.navigate('user', {})}>
        <Text>Cadastrar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}


export default Login;