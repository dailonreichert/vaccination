import { Router } from 'express';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAutheticated';
import VaccinesController from '../controllers/VaccinesController';

const vaccinesRouter = Router();
const vaccinesController = new VaccinesController();

vaccinesRouter.use(ensureAuthenticated);

vaccinesRouter.get('/', vaccinesController.index);

export default vaccinesRouter;
