import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import IAnimalRepository from '../repositories/IAnimalsRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ListAnimalsService {
  constructor(
    @inject('AnimalsRepository')
    private animalRepository: IAnimalRepository,
  ) {}

  /*public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.animalRepository.find({ where: {user_id}});

    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }*/
}

export default ListAnimalsService;
