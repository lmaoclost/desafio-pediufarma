import { Router } from 'express';
import EstoqueController from './app/controllers/EstoqueController';

const routes = new Router();

routes.get('/', EstoqueController.index);

export default routes;
