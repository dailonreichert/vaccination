import { startOfHour } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import Appontment from '../infra/typeorm/entities/Appointment';
import IAppointmetsRepository from '../repositories/IAppointmentsRepository';

interface IRequestDTO {
  animal_id: string;
  vaccine_id: string;
  user_id: string;
  date: Date;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmetsRepository, // @inject('NotificationsRepository') // private notificationsRepository: INotificationsRepository,
  ) {}

  public async execute({
    animal_id,
    vaccine_id,
    user_id,
    date,
  }: IRequestDTO): Promise<Appontment> {
    const hourOfDate = startOfHour(date);

    const appointment = await this.appointmentsRepository.create({
      animal_id,
      vaccine_id,
      user_id,
      date: hourOfDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
