import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import AnimalsRepository from '@modules/animals/infra/typeorm/repositories/animalsRepository';

import IUsersRepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokenRepository from '@modules/users/repositories/IUserTokenRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IAnimalsRepository>(
  'AnimalsRepository',
  AnimalsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokenRepository>(
  'UserTokenRepository',
  UserTokensRepository,
);
