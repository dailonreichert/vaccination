import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListVaccinesService from '../../../services/ListVaccinesService';

export default class VaccinesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listVaccineService = container.resolve(ListVaccinesService);

    const vaccines = await listVaccineService.execute();

    return response.json(vaccines);
  }
}
