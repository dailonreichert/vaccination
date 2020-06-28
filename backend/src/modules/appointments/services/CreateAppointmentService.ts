import { startOfHour, format } from 'date-fns';
import { injectable, inject } from 'tsyringe';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
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
    private appointmentsRepository: IAppointmetsRepository,

    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
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

    const dateFormated = format(hourOfDate, "dd/MM/yyyy 'às' HH:mm'h'");

    await this.notificationsRepository.create({
      recipient_id: user_id,
      content: `Novo agendamento para dia ${dateFormated}`,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
