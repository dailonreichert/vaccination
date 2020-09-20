import { Router } from 'express';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import animalsRouter from '../../../../modules/animals/infra/http/routes/animals.routes';
import vaccinesRouter from '../../../../modules/vaccines/infra/http/routes/vaccines.routes';
import appointmentsRouter from '../../../../modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '../../../../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../../../../modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/animals', animalsRouter);
routes.use('/vaccines', vaccinesRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
