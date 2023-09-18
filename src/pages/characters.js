import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keyboard, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './style';

export default class Main extends Component {
  state = {
    newCharacter: '',
    characters: [],
    loading: false,
  };

  async componentDidMount() {
    const characters = await AsyncStorage.getItem('characters');

    if (characters) {
      this.setState({characters: JSON.parse(characters)});
    }
  }

  async componentDidUpdate(_, prevState) {
    const {characters} = this.state;

    if (prevState.characters !== characters) {
      await AsyncStorage.setItem('characters', JSON.stringify(characters));
    }
  }

  handleAddCharacter = async () => {
    try {
      const {characters, newCharacter} = this.state;

      this.setState({loading: true});

      const response = await api.get(`/characters/${newCharacter}`);

      console.log(response)

      const data = {
      };

      this.setState({
        characters: [...characters, data],
        newCharacter: '',
        loading: false,
      });

      Keyboard.dismiss();
    } catch (error) {
      alert('Personagem não encontrado!');
      this.setState({loading: false});
    }

    console.log(response.data);
  };

  render() {
    const {characters, newCharacter, loading} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar personagem"
            value={newCharacter}
            onChangeText={text => this.setState({newCharacter: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddCharacter}
          />
          <SubmitButton loading={loading} onPress={this.handleAddCharacter}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>
        </Form>

        <List
          showsVerticalScrollIndicator={false}
          data={characters}
          keyExtractor={character => character.login}
          renderItem={({item}) => (
            <User>
              <Avatar source={{uri: item.avatar}} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton
                // onPress={() => {
                //   this.props.navigation.navigate('character', {character: item});
                // }}
                >
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>

              <ProfileButton
                onPress={() => {
                  this.setState({
                    characters: this.state.characters.filter(
                      character => character.login !== item.login,
                    ),
                  });
                }}
                style={{backgroundColor: '#FFC0CB', borderRadius: 10}}>
                <ProfileButtonText>Excluir</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}