import { injectable, inject } from 'tsyringe';
import Animal from '../infra/typeorm/entities/Animal';
import IAnimalsRepository from '../repositories/IAnimalsRepository';

interface IRequestDTO {
  user_id: string;
  description: string;
}

@injectable()
class CreateAnimalService {
  constructor(
    @inject('AnimalsRepository')
    private animalsRepository: IAnimalsRepository,
  ) {}

  public async execute({ user_id, description }: IRequestDTO): Promise<Animal> {
    const animal = await this.animalsRepository.create({
      user_id,
      description,
    });

    return animal;
  }
}

export default CreateAnimalService;
