import { getRepository, Repository } from 'typeorm';
import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import Animal from '../entities/Animal';
import ICreateAnimalDTO from '../../../dtos/ICreateAnimalDTO';

class AnimalsRepository implements IAnimalsRepository {
  private ormRepository: Repository<Animal>;

  constructor() {
    this.ormRepository = getRepository(Animal);
  }

  public async create({
    user_id,
    description,
  }: ICreateAnimalDTO): Promise<Animal> {
    const Animal = this.ormRepository.create({ user_id, description });

    await this.ormRepository.save(Animal);

    return Animal;
  }
}

export default AnimalsRepository;
