import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

function Dashboard(): JSX.Element {
  const name = localStorage.getItem('@AnimalVaccination:userName');

  const history = useHistory();

  function handleLogout(): void {
    localStorage.clear();

    window.location.reload();
  }

  return (
    <Container>
      <header>
        <img src={logoImg} alt="animal-vaccination" />
        <span>
          Bem Vindo(a),
          {` ${name}`}
        </span>

        <Link className="button" to="animais/novo">
          Cadastrar animal
        </Link>

        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Animais Cadastrados</h1>
    </Container>
  );
}

export default Dashboard;
