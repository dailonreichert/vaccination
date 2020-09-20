import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import Appointment from '../infra/typeorm/entities/Appointment';

interface IRequest {
  user_id: string;
  day: number;
  month: number;
  year: number;
}

interface IRequestList {
  user_id: string;
  animal_id: string;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    user_id,
    year,
    month,
    day,
  }: IRequest): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
      {
        user_id,
        year,
        month,
        day,
      },
    );

    return appointments;
  }

  public async list({
    user_id,
    animal_id,
  }: IRequestList): Promise<Appointment[]> {
    const appointments = await this.appointmentsRepository.findAllFromProviderAnimal(
      {
        user_id,
        animal_id,
      },
    );

    return appointments;
  }
}

export default ListProviderAppointmentsService;
