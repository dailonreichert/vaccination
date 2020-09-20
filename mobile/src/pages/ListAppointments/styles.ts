import { FlatList, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Appointment } from './index';

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

export const DeleteButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f5ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-right: auto;
  margin-left: 10px;
`;

export const Content = styled.ScrollView`
  margin-top: 50px;
  padding: 0 30px 150px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 24px;
  margin-bottom: 40px;
`;

export const ContainerButton = styled.View`
  margin-top: 40px;
`;

export const AppointList = styled(FlatList as new () => FlatList<Appointment>)`
  padding: 32px 24px;
  margin-bottom: -220px;
`;

export const AppointmentListTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const AppointmentContainer = styled.View`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const AppointmentInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const AppointmentName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 55px;
  background: #b8703d;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 235px 24px 24px;
`;

export const CreateAppointmentButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 19px;
  color: #f4ede8;
`;

export const AppointmentDate = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 12px;
  color: grey;
  margin-top: 5px;
`;
