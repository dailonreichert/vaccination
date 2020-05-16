import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #5A5A5A;
  border-radius: 6px;
  padding: 16px;
  width: 100%;

  border: 2px solid #5A5A5A;
  color: #BABABA;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #b8703d;
      border-color: #b8703d;
    `}

  ${props =>
    props.isField &&
    css`
      color: #b8703d;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #F1F1ED;

    &::placeholder {
      color: #BABABA;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
