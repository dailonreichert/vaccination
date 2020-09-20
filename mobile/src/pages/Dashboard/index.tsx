import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  AnimalsList,
  AnimalContainer,
  AnimalInfo,
  AnimalName,
  AnimalListTitle,
  CreateAnimalButton,
  CreateAnimalButtonText,
  LogoutButton,
  DeleteButton,
} from './styles';

export interface Animal {
  id: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [deletes, setDeletes] = useState<boolean>(false);
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  useEffect(() => {
    api.get('animals').then(response => {
      setAnimals(response.data);
    });

    setDeletes(false);
  }, [deletes]);

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  const logout = useCallback(() => {
    signOut();
  }, [signOut]);

  const navigateToListAppointments = useCallback(
    (animalId: string) => {
      navigate('ListAppointments', { animalId });
    },
    [navigate],
  );

  const handleCreateAnimalButton = useCallback(() => {
    navigate('CreateAnimal');
  }, [navigate]);

  const deleteAnimal = useCallback((animalId: string) => {
    api.delete('animals/delete', {
      params: {
        animal_id: animalId,
      },
    });

    setDeletes(true);
  }, []);

  return (
    <Container>
      <Header>
        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>

        <HeaderTitle>
          Bem vindo,
          {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <LogoutButton onPress={logout}>
          <Icon name="log-out" size={24} color="#999591" />
        </LogoutButton>
      </Header>

      <AnimalsList
        data={animals}
        keyExtractor={animal => animal.id}
        ListHeaderComponent={<AnimalListTitle>Animais</AnimalListTitle>}
        renderItem={({ item: animal }) => (
          <>
            <AnimalContainer
              onPress={() => navigateToListAppointments(animal.id)}
            >
              <AnimalInfo>
                <AnimalName>{animal.description}</AnimalName>
              </AnimalInfo>
            </AnimalContainer>
            <DeleteButton onPress={() => deleteAnimal(animal.id)}>
              <Icon name="trash" size={20} color="#999591" />
            </DeleteButton>
          </>
        )}
      />
      <CreateAnimalButton onPress={handleCreateAnimalButton}>
        <CreateAnimalButtonText>Adicionar Animal</CreateAnimalButtonText>
      </CreateAnimalButton>
    </Container>
  );
};
export default Dashboard;
