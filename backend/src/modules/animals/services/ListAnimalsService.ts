import { inject, injectable } from 'tsyringe';
import IAnimalRepository from '../repositories/IAnimalsRepository';
import Animal from '../infra/typeorm/entities/Animal';

interface IRequest {
  user_id: string;
}

@injectable()
class ListAnimalsService {
  constructor(
    @inject('AnimalsRepository')
    private animalRepository: IAnimalRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Animal[]> {
    const animal = await this.animalRepository.index(user_id);

    return animal;
  }
}

export default ListAnimalsService;
