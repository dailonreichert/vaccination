import { getRepository, Repository } from 'typeorm';
import IVaccinesRepository from '@modules/vaccines/repositories/IVaccinesRepository';
import Vaccine from '../entities/Vaccine';

class VaccinesRepository implements IVaccinesRepository {
  private ormRepository: Repository<Vaccine>;

  constructor() {
    this.ormRepository = getRepository(Vaccine);
  }

  public async index(): Promise<Vaccine[]> {
    const vaccines = await this.ormRepository.find();

    return vaccines;
  }
}

export default VaccinesRepository;
