import Vaccine from '../infra/typeorm/entities/Vaccine';

export default interface IAppointmentsRepository {
  index(): Promise<Vaccine[]>;
}
