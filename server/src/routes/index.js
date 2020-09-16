import express from 'express';
import UserController from '../controllers/userController'
import ReportController from '../controllers/reportController';

export const route = express();

// User routes. 

route.post('/signup', UserController.signUp);
route.post('/login', UserController.Login);
route.post('/request-password-reset', UserController.requestPasswordReset);
route.put('/complete-password-reset-process/:token', UserController.resetPassword);

// Report's routes;

route.post('/new-report', ReportController.createReport)