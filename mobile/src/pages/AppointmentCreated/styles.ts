import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin-top: 48px;
  text-align: center;
`;

export const OkButton = styled(RectButton)`
  background: #b8703d;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 60px;
  padding: 12px 24px;
`;

export const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 18px;
`;
