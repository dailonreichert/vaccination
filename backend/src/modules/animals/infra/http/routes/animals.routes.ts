import { Router } from 'express';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAutheticated';
import AnimalsController from '../controllers/AnimalsController';

const animalsRouter = Router();
const animalsController = new AnimalsController();

animalsRouter.use(ensureAuthenticated);

animalsRouter.post('/', animalsController.create);

export default animalsRouter;
