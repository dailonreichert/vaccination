import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAppointmentService from '../../../services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const { animal_id, vaccine_id, date } = request.body;

    const createAppointmentService = container.resolve(
      CreateAppointmentService,
    );

    const appointment = await createAppointmentService.execute({
      animal_id,
      vaccine_id,
      user_id,
      date,
    });

    return response.json(appointment);
  }
}
