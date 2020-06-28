import { inject, injectable } from 'tsyringe';
import IVaccinesRepository from '../repositories/IVaccinesRepository';
import Vaccine from '../infra/typeorm/entities/Vaccine';

@injectable()
class ListVaccinesService {
  constructor(
    @inject('VaccinesRepository')
    private vaccineRepository: IVaccinesRepository,
  ) {}

  public async execute(): Promise<Vaccine[]> {
    const vaccines = await this.vaccineRepository.index();

    return vaccines;
  }
}

export default ListVaccinesService;
