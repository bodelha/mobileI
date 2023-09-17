import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import loginStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const CreateUser = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [email, setEmail] = useState('');
    const cursos = [
        {'label':'ADS', 'value':'ADS'},
        {'label':'DSM', 'value':'DSM'},
        {'label':'GPI', 'value':'GPI'},
        {'label':'GRH', 'value':'GRH'},
    ];
    const [curso, setCurso] = useState(null);
    const [open, setOpen] = useState(false);


    const handlePhone = () => {
        const phoneIsValid = phone.match(/^[0-9]{11}$/);

        if (!phoneIsValid) {
            Alert.alert('Telefone inválido', `${phone} não é um telefone válido`);
            setPhone('');
        }

        setPhone(phone);
    };

    const handleCPF = () => {
        const CPFIsValid = cpf.match(/^[0-9]{11}$/);

        if (!CPFIsValid) {
            Alert.alert('CPF inválido', `${cpf} não é um CPF válido`);
            setCPF('');
        }

        setCPF(cpf);
    };

    const handleEmail = () => {
        const emailIsValid = email.match(/^^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9_.-]+.(com))$/);

        if (!emailIsValid) {
            Alert.alert('E-mail inválido', `${email} não é um e-mail válido`);
            setEmail('');
        }

        setEmail(email);
    };

    return (
        <View style={loginStyles.container}>
            <TextInput
                style={loginStyles.input}
                placeholder='Nome'
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={loginStyles.input}
                placeholder="Telefone"
                value={phone}
                keyboardType="phone-pad"
                onChangeText={(text) => setPhone(text)}
                onBlur={handlePhone}
                maxLength={11}
            />
            <TextInput
                style={loginStyles.input}
                placeholder="CPF"
                value={cpf}
                keyboardType="numeric"
                onChangeText={(text) => setCPF(text)}
                onBlur={handleCPF}
                maxLength={11}
            />
            <TextInput
                style={loginStyles.input}
                placeholder='E-mail'
                value={email}
                onChangeText={(text) => setEmail(text)}
                onBlur={handleEmail}
            />
            <DropDownPicker
                style={loginStyles.input}
                placeholder={'Curso'}
                multiple={false}
                items={cursos}
                value={curso}
                open={open}
                setOpen={setOpen}
                onOpen={() => setOpen(true)}
                setValue={(value)=> setCurso(value)}
            />
            <TouchableOpacity
                style={loginStyles.button}
                onPress={() => {
                    console.log(
                        `name:${name}`,
                        `phone:${phone}`,
                        `CPF:${cpf}`,
                        `email:${email}`,
                        `curso:${curso}`
                    )
                    navigation.navigate('login', {})
                }}
            >
                <Text style={loginStyles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View >
    );
};

export default CreateUser;
