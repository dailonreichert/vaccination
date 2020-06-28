import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListAnimalsService from '@modules/animals/services/ListAnimalsService';
import CreateAnimalService from '../../../services/CreateAnimalService';

export default class AnimalsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, description } = request.body;

    const createAnimalService = container.resolve(CreateAnimalService);

    const animal = await createAnimalService.execute({
      user_id,
      description,
    });

    return response.json(animal);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listAnimalService = container.resolve(ListAnimalsService);

    const animals = await listAnimalService.execute({
      user_id,
    });

    return response.json(animals);
  }
}
