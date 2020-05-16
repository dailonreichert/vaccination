import Animal from '../infra/typeorm/entities/Animal';
import ICreateAppointmentDTO from '../dtos/ICreateAnimalDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Animal>;
}
