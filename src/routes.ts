import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();




//definir primeira rota
//listagem
routes.get('/classes', classesControllers.index);

//criacao de uma aula
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);

routes.post('/connections', connectionsController.create);


export default routes;