import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';
import signInbackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInbackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #5a5a5a;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;
      font-size: 18px;

      &:hover {
        color: ${lighten(0.7, '#5A5A5A')};
      }
    }
  }

  > a {
    color: #b8703d;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 18px;
    font-weight: bold;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${lighten(0.5, '#B8703D')};
    }
  }
`;
