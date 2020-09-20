import React, { useCallback, useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  AnimalsListContainer,
  AnimalsList,
  AnimalName,
  AnimalContainer,
  Calendar,
  Title,
  MainTitle,
  OpenDatePicker,
  OpenDatePickerText,
  VaccinesListContainer,
  VaccinesList,
  VaccineContainer,
  VaccineName,
  Content,
  CreateAppointmentButton,
  CreateAppointmentButtonText,
} from './styles';
import api from '../../services/api';

interface RouteParams {
  animalIdParam: string;
}

export interface Animal {
  id: string;
  description: string;
}

export interface Vaccine {
  id: string;
  name: string;
  description: string;
}

const CreateAppointment: React.FC = () => {
  const route = useRoute();
  const { animalIdParam } = route.params as RouteParams;
  const { goBack, navigate } = useNavigation();

  const [animals, setAnimals] = useState<Animal[]>([]);
  const [vaccines, setVaccines] = useState<Vaccine[]>([]);
  const [showDatePiker, setShowDatePiker] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(animalIdParam);
  const [selectedVaccine, setSelectedVaccine] = useState<string>();
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    api.get('animals').then(response => {
      setAnimals(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('vaccines').then(response => {
      setVaccines(response.data);
    });
  }, []);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSelectAnimal = useCallback((id: string) => {
    setSelectedAnimal(id);
  }, []);

  const handleSelectVaccine = useCallback((id: string) => {
    setSelectedVaccine(id);
  }, []);

  const handleToggleDatePicker = useCallback((id: string) => {
    setShowDatePiker(state => !state);
  }, []);

  const handleDateChange = useCallback((event: any, date: Date | undefined) => {
    setShowDatePiker(false);
    date && setSelectedDate(date);
  }, []);

  const handleCreateAppointmentButton = useCallback(async () => {
    try {
      await api.post('appointments', {
        animal_id: selectedAnimal,
        vaccine_id: selectedVaccine,
        date: selectedDate,
      });

      navigate('AppointmentCreated');
    } catch (err) {
      Alert.alert(
        'Erro ao marcar vacina',
        'Ocorreu um erro ao tentar marcar a vacina, tente novamente.',
      );
    }
  }, [navigate, selectedDate, selectedAnimal, selectedVaccine]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Voltar</HeaderTitle>
      </Header>

      <Content>
        <MainTitle>Marcar vacina</MainTitle>

        <Title>Animal</Title>
        <AnimalsListContainer>
          <AnimalsList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={animals}
            keyExtractor={animal => animal.id}
            renderItem={({ item: animal }) => (
              <AnimalContainer
                onPress={() => handleSelectAnimal(animal.id)}
                selected={animal.id === selectedAnimal}
              >
                <AnimalName>{animal.description}</AnimalName>
              </AnimalContainer>
            )}
          />
        </AnimalsListContainer>

        <Title>Vacina</Title>
        <VaccinesListContainer>
          <VaccinesList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={vaccines}
            keyExtractor={vaccine => vaccine.id}
            renderItem={({ item: vaccine }) => (
              <VaccineContainer
                onPress={() => handleSelectVaccine(vaccine.id)}
                selected={vaccine.id === selectedVaccine}
              >
                <VaccineName>{vaccine.name}</VaccineName>
                {/* <VaccineDescription>{vaccine.description}</VaccineDescription> */}
              </VaccineContainer>
            )}
          />
        </VaccinesListContainer>

        <Title>Data</Title>
        <Calendar>
          <OpenDatePicker onPress={handleToggleDatePicker}>
            <OpenDatePickerText>Selecionar data</OpenDatePickerText>
          </OpenDatePicker>

          {showDatePiker && (
            <DateTimePicker
              mode="date"
              display="calendar"
              onChange={handleDateChange}
              value={selectedDate}
            />
          )}
        </Calendar>

        <CreateAppointmentButton onPress={handleCreateAppointmentButton}>
          <CreateAppointmentButtonText>
            Marcar vacina
          </CreateAppointmentButtonText>
        </CreateAppointmentButton>
      </Content>
    </Container>
  );
};
export default CreateAppointment;
