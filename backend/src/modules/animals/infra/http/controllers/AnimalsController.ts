import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAnimalService from '../../../services/CreateAnimalService';

export default class AnimalsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, description } = request.body;

    const createAnimalService = container.resolve(
      CreateAnimalService,
    );

    const animal = await createAnimalService.execute({
      user_id,
      description,
    });

    return response.json(animal);
  }
}
