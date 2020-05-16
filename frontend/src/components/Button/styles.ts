import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #b8703d;
  height: 56px;
  border-radius: 6px;
  border: 0;
  padding: 0 16px;
  color: #f1f1ed;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.2, '#B8703D')};
  }
`;
