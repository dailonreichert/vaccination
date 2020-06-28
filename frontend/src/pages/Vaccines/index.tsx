import React, { useState, useEffect } from 'react';

import 'react-day-picker/lib/style.css';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Vaccine,
  Section,
  ListVaccines,
} from './styles';
import logoImg from '../../assets/logo-dash.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface Vaccine {
  id: string;
  name: string;
  description: string;
}

interface VaccineFormData {
  name: string;
  description: string;
}

const Vaccines: React.FC = () => {
  const { signOut, user } = useAuth();

  const [vaccines, setVaccines] = useState<Vaccine[]>([]);

  useEffect(() => {
    api
      .get<Vaccine[]>('/vaccines')
      .then(response => setVaccines(response.data));
  }, [vaccines]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="AnimalVaccination" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo, </span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <ListVaccines>
          <h1>Vacinas</h1>

          <Section>
            {vaccines.length === 0 && <p>Nenhuma vacina cadastrada</p>}

            {vaccines.map(vaccine => (
              <Vaccine key={vaccine.id}>
                <div>
                  <strong>{vaccine.name}</strong>
                  <strong>{vaccine.description}</strong>
                </div>
              </Vaccine>
            ))}
          </Section>
        </ListVaccines>
      </Content>
    </Container>
  );
};

export default Vaccines;
