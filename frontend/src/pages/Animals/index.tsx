import React, { useState, useEffect, useRef, useCallback } from 'react';

import 'react-day-picker/lib/style.css';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Animal,
  Section,
  Create,
  ListAnimals,
} from './styles';
import logoImg from '../../assets/logo-dash.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

interface Animals {
  id: string;
  description: string;
}

interface AnimalFormData {
  description: string;
}

const Animals: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signOut, user } = useAuth();
  const { addToast } = useToast();

  const UserId = user.id;

  const [animals, setAnimals] = useState<Animals[]>([]);

  useEffect(() => {
    api.get<Animals[]>('/animals').then(response => setAnimals(response.data));
  }, [animals]);

  const handleSubmit = useCallback(
    async (data: AnimalFormData) => {
      try {
        /* const animal = await api.post('/animals', {
          description: data.description,
        });

        setAnimals(animal); */
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro!',
          desciption: 'Ocorreu um erro ao fazer o cadastro, tente novamente.',
        });
      }
    },
    [addToast],
  );

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
        <Create>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Adicionar Animal</h1>

            <input name="desciption" placeholder="Descrição" />

            <Button type="submit">Adicionar</Button>
          </Form>
        </Create>

        <ListAnimals>
          <h1>Animais</h1>

          <Section>
            {animals.length === 0 && <p>Nenhum animal cadastrado</p>}

            {animals.map(animal => (
              <Animal key={animal.id}>
                <div>
                  <strong>{animal.description}</strong>
                </div>
              </Animal>
            ))}
          </Section>
        </ListAnimals>
      </Content>
    </Container>
  );
};

export default Animals;
