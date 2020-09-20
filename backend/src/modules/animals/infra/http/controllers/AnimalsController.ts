import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListAnimalsService from '@modules/animals/services/ListAnimalsService';
import CreateAnimalService from '../../../services/CreateAnimalService';
import DeleteAnimalService from '../../../services/DeleteAnimalService';

export default class AnimalsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const { description } = request.body;

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

  public async delete(request: Request, response: Response): Promise<boolean> {
    const user_id = request.user.id;
    const { animal_id } = request.query;

    const deleteAnimalService = container.resolve(DeleteAnimalService);

    await deleteAnimalService.delete({
      user_id,
      animal_id: String(animal_id),
    });

    return response.json(true);
  }
}
