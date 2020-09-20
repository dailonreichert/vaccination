import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';
import DeleteAppointmentService from '@modules/appointments/services/DeleteAppointmentService';
import { classToClass } from 'class-transformer';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { month, year, day } = request.query;

    const listProviderAppointmentsService = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await listProviderAppointmentsService.execute({
      user_id,
      day: Number(day),
      month: Number(month),
      year: Number(year),
    });

    return response.json(classToClass(appointments));
  }

  public async all(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { animal_id } = request.query;

    const listProviderAppointmentsService = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await listProviderAppointmentsService.list({
      user_id,
      animal_id: String(animal_id),
    });

    return response.json(classToClass(appointments));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { appointment_id } = request.query;

    const deleteAppointmentService = container.resolve(
      DeleteAppointmentService,
    );

    await deleteAppointmentService.delete({
      user_id,
      appointment_id: String(appointment_id),
    });

    return response.json(true);
  }
}
