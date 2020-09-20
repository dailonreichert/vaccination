import { getRepository, Repository } from 'typeorm';
import IAnimalsRepository from '@modules/animals/repositories/IAnimalsRepository';
import Animal from '../entities/Animal';
import ICreateAnimalDTO from '../../../dtos/ICreateAnimalDTO';
import IDeleteAnimalDTO from '../../../dtos/IDeleteAnimalDTO';

class AnimalsRepository implements IAnimalsRepository {
  private ormRepository: Repository<Animal>;

  constructor() {
    this.ormRepository = getRepository(Animal);
  }

  public async create({
    user_id,
    description,
  }: ICreateAnimalDTO): Promise<Animal> {
    const animal = this.ormRepository.create({ user_id, description });

    await this.ormRepository.save(animal);

    return animal;
  }

  public async index(user_id: string): Promise<Animal[]> {
    const animals = await this.ormRepository.find({
      where: { user_id },
    });

    return animals;
  }

  public async delete({
    user_id,
    animal_id,
  }: IDeleteAnimalDTO): Promise<boolean> {
    this.ormRepository.delete({
      user_id,
      id: animal_id,
    });

    return true;
  }
}

export default AnimalsRepository;
