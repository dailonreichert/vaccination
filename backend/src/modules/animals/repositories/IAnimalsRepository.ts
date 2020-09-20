import Animal from '../infra/typeorm/entities/Animal';
import ICreateAppointmentDTO from '../dtos/ICreateAnimalDTO';
import IDeleteAnimalDTO from '../dtos/IDeleteAnimalDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Animal>;
  index(data: string): Promise<Animal[]>;
  delete(data: IDeleteAnimalDTO): Promise<boolean>;
}
