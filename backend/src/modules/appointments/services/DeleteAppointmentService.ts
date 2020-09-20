import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  user_id: string;
  appointment_id: string;
}

@injectable()
class DeleteAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async delete({ user_id, appointment_id }: IRequest): Promise<boolean> {
    await this.appointmentsRepository.delete({
      user_id,
      appointment_id,
    });

    return true;
  }
}

export default DeleteAppointmentsService;
