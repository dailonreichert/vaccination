import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInDayFromProviderDTO from '../dtos/IFindAllInDayFromProviderDTO';
import IFindAllFromProviderAnimalDTO from '../dtos/IFindAllFromProviderAnimalDTO';
import IDeleteAppointmentAnimalDTO from '../dtos/IDeleteAppointmentAnimalDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(data: Date, provider_id: string): Promise<Appointment | undefined>;
  findAllFromProviderAnimal(
    data: IFindAllFromProviderAnimalDTO,
  ): Promise<Appointment[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayFromProviderDTO,
  ): Promise<Appointment[]>;
  delete(data: IDeleteAppointmentAnimalDTO): Promise<boolean>;
}
