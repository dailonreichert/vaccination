import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderTitle,
  AppointList,
  BackButton,
  AppointmentListTitle,
  AppointmentContainer,
  AppointmentInfo,
  AppointmentName,
  CreateAppointmentButton,
  CreateAppointmentButtonText,
  AppointmentDate,
  DeleteButton,
} from './styles';

export interface Appointment {
  id: string;
  date: string;
  hourFormatted: string;

  vaccine: {
    id: string;
    name: string;
  };

  animal: {
    id: string;
    description: string;
  };

  user: {
    name: string;
  };
}

interface RouteParams {
  animalId: string;
}

const ListAppointments: React.FC = () => {
  const route = useRoute();
  const { animalId } = route.params as RouteParams;

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [deletes, setDeletes] = useState<boolean>(false);
  const { goBack, navigate } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const navigateToCreateAppointments = useCallback(
    (animalIdParam: string) => {
      navigate('CreateAppointment', { animalIdParam });
    },
    [navigate],
  );

  const deleteAppointment = useCallback((appointId: string) => {
    api.delete('appointments/delete', {
      params: {
        appointment_id: appointId,
      },
    });

    setDeletes(true);
  }, []);

  useEffect(() => {
    api
      .get('appointments/all', {
        params: {
          animal_id: animalId,
        },
      })
      .then(response => {
        const appointmentsFormatted = response.data.map(appointment => {
          return {
            ...appointment,
            hourFormatted: format(
              parseISO(appointment.date),
              "EEEE', dia ' dd 'de' MMMM 'de' yyyy",
              { locale: ptBR },
            ),
          };
        });

        setAppointments(appointmentsFormatted);
        setDeletes(false);
      });
  }, [animalId, deletes]);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>Animais</HeaderTitle>
      </Header>

      <AppointList
        data={appointments}
        keyExtractor={appointment => appointment.id}
        ListHeaderComponent={
          <AppointmentListTitle>Vacinas Marcadas</AppointmentListTitle>
        }
        renderItem={({ item: appointment }) => (
          <AppointmentContainer>
            <AppointmentInfo>
              <AppointmentName>{appointment.vaccine.name}</AppointmentName>
              <AppointmentDate>{appointment.hourFormatted}</AppointmentDate>
            </AppointmentInfo>
            <DeleteButton onPress={() => deleteAppointment(appointment.id)}>
              <Icon name="trash" size={20} color="#999591" />
            </DeleteButton>
          </AppointmentContainer>
        )}
      />
      <CreateAppointmentButton
        onPress={() => navigateToCreateAppointments(animalId)}
      >
        <CreateAppointmentButtonText>Marcar vacina</CreateAppointmentButtonText>
      </CreateAppointmentButton>
    </Container>
  );
};

export default ListAppointments;
