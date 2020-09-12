import express from 'express';
import UserController from '../controllers/userController'

export const route = express();

route.post('/signup', UserController.signUp);