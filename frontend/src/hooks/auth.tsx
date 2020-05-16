import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentials {
  usuemail: string;
  ususenha: string;
}

interface AuthContextState {
  usuario: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  usuario: object;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@AnimalVaccination:token');
    const usuario = localStorage.getItem('@AnimalVaccination:usuario');

    if (token && usuario) {
      return { token, usuario: JSON.parse(usuario) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ usuemail, ususenha }) => {
    const response = await api.post('sessoes', { usuemail, ususenha });

    const { token, usuario } = response.data;

    localStorage.setItem('@AnimalVaccination:token', token);
    localStorage.setItem('@AnimalVaccination:usuario', JSON.stringify(usuario));
    localStorage.setItem('@AnimalVaccination:usuarioNome', usuario.usunome);

    setData({ token, usuario });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@AnimalVaccination:token');
    localStorage.removeItem('@AnimalVaccination:usuario');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ usuario: data.usuario, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
