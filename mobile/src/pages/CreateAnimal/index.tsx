import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import { Alert, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import api from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  Content,
  Title,
  ContainerButton,
} from './styles';

interface CreateAnimalFormData {
  description: string;
}

const CreateAnimal: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const handleCreateAnimal = useCallback(
    async (data: CreateAnimalFormData) => {
      try {
        await api.post('animals', {
          description: data.description,
        });

        navigate('AnimalCreated');
      } catch (err) {
        Alert.alert(
          'Erro ao adicionar animal',
          'Ocorreu um erro ao tentar adicionar animal, tente novamente.',
        );
      }
    },
    [navigate],
  );

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>Voltar</HeaderTitle>
      </Header>

      <Content>
        <Title>Cadastrar animal</Title>
        <Form ref={formRef} onSubmit={handleCreateAnimal}>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            name="description"
            placeholder="Nome"
          />
          <ContainerButton>
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Adicionar Animal
            </Button>
          </ContainerButton>
        </Form>
      </Content>
    </Container>
  );
};
export default CreateAnimal;
