import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Animal } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: #28262e;

  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 18px;
  font-family: 'Roboto-Regular';
  line-height: 28px;
  margin-left: 10px;
`;

export const UserName = styled.Text`
  color: #b8703d;
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-left: 350px;
  position: absolute;
`;

export const AnimalsList = styled(FlatList as new () => FlatList<Animal>)`
  padding: 32px 24px 16px;
  margin-bottom: -220px;
`;

export const AnimalContainer = styled(RectButton)`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const AnimalInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const AnimalName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
`;

export const AnimalListTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const CreateAnimalButton = styled(RectButton)`
  height: 55px;
  background: #b8703d;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 235px 24px 24px;
`;

export const CreateAnimalButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 19px;
  color: #f4ede8;
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  margin-left: 305px;
  margin-top: 22px;
`;
