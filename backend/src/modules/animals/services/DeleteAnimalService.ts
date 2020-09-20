import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import IAnimalsRepository from '../repositories/IAnimalsRepository';

interface IRequest {
  user_id: string;
  animal_id: string;
}

@injectable()
class DeleteAnimalService {
  constructor(
    @inject('AnimalsRepository')
    private animalsRepository: IAnimalsRepository,
  ) {}

  public async delete({ user_id, animal_id }: IRequest): Promise<boolean> {
    await this.animalsRepository.delete({
      user_id,
      animal_id,
    });

    return true;
  }
}

export default DeleteAnimalService;
