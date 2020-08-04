import  ConnectionsController from './controllers/ConnectionsController';
import express from 'express';
import ClassesController from './controllers/ClassesControllers';

const routes = express.Router();
const classesController = new ClassesController();
const connectonsController = new ConnectionsController();

routes.get('/classes',classesController.index);
routes.post('/classes',classesController.create);

routes.get('/connections',connectonsController.index);
routes.post('/connections',connectonsController.create);

export default routes;