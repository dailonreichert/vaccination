import { getRepository, Repository, Raw } from 'typeorm';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import IFindAllInDayFromProviderDTO from '@modules/appointments/dtos/IFindAllInDayFromProviderDTO';
import IFindAllFromProviderAnimalDTO from '@modules/appointments/dtos/IFindAllFromProviderAnimalDTO';
import IDeleteAppointmentAnimalDTO from '@modules/appointments/dtos/IDeleteAppointmentAnimalDTO';
import Appointment from '../entities/Appointment';
import ICreateAppointmentDTO from '../../../dtos/ICreateAppointmentDTO';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(
    date: Date,
    provider_id: string,
  ): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date, provider_id },
    });

    return findAppointment;
  }

  public async findAllInDayFromProvider({
    user_id,
    day,
    month,
    year,
  }: IFindAllInDayFromProviderDTO): Promise<Appointment[]> {
    const parsedMonth = String(month).padStart(2, '0');
    const parsedDay = String(day).padStart(2, '0');

    const appointments = await this.ormRepository.find({
      where: {
        user_id,
        date: Raw(
          dateFieldName =>
            `to_char(${dateFieldName}, 'DD-MM-YYYY') = '${parsedDay}-${parsedMonth}-${year}'`,
        ),
      },
      relations: ['user', 'animal', 'vaccine'],
    });

    return appointments;
  }

  public async findAllFromProviderAnimal({
    user_id,
    animal_id,
  }: IFindAllFromProviderAnimalDTO): Promise<Appointment[]> {
    const appointments = await this.ormRepository.find({
      where: {
        user_id,
        animal_id,
      },
      relations: ['user', 'animal', 'vaccine'],
    });

    return appointments;
  }

  public async create({
    animal_id,
    vaccine_id,
    user_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create({
      animal_id,
      vaccine_id,
      user_id,
      date,
    });

    await this.ormRepository.save(appointment);

    return appointment;
  }

  public async delete({
    user_id,
    appointment_id,
  }: IDeleteAppointmentAnimalDTO): Promise<boolean> {
    this.ormRepository.delete({
      user_id,
      id: appointment_id,
    });

    return true;
  }
}

export default AppointmentsRepository;
