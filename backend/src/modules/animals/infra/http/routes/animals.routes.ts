import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAutheticated';
import AnimalsController from '../controllers/AnimalsController';

const animalsRouter = Router();
const animalsController = new AnimalsController();

animalsRouter.use(ensureAuthenticated);

animalsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string(),
    },
  }),
  animalsController.create,
);

animalsRouter.get('/', animalsController.index);
animalsRouter.delete('/delete', animalsController.delete);

export default animalsRouter;
