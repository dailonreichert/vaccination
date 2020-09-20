import styled from 'styled-components/native';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { Animal, Vaccine } from './index';

interface AnimalContainerProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f5ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-right: auto;
  margin-left: 10px;
`;

export const AnimalsListContainer = styled.View`
  height: 112px;
`;

export const AnimalsList = styled(FlatList as new () => FlatList<Animal>)`
  padding: 25px 24px;
`;

export const AnimalName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  align-items: center;
  color: #f4ede8;
`;

export const AnimalContainer = styled(RectButton)<AnimalContainerProps>`
  background: ${props => (props.selected ? '#b8703d' : '#3e3b47')};
  flex-direction: row;
  align-items: center;
  padding: 1px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #28262e;
  font-size: 16px;
  margin-left: 25px;
`;

export const MainTitle = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 24px;
  margin: 30px 25px 50px;
`;

export const OpenDatePicker = styled(RectButton)`
  height: 50px;
  background: #b8703d;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 25px 24px;
`;

export const OpenDatePickerText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 17px;
  color: #f4ede8;
`;

export const VaccinesListContainer = styled.View`
  height: 112px;
`;

export const VaccinesList = styled(FlatList as new () => FlatList<Vaccine>)`
  padding: 25px 24px;
`;

export const VaccineContainer = styled(RectButton)<AnimalContainerProps>`
  background: ${props => (props.selected ? '#b8703d' : '#3e3b47')};
  flex-direction: row;
  align-items: center;
  padding: 1px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const VaccineName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  align-items: center;
  color: #f4ede8;
`;

export const Content = styled.ScrollView``;

export const CreateAppointmentButton = styled(RectButton)`
  height: 55px;
  background: #b8703d;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 75px 24px 24px;
`;

export const CreateAppointmentButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
`;
