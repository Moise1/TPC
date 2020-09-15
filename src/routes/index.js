import express from 'express';
import UserController from '../controllers/userController'
import ReportController from '../controllers/reportController';

export const route = express();

// User routes. 

route.post('/signup', UserController.signUp);
route.post('/login', UserController.Login);
route.post('/reset-password-request', UserController.requestPasswordReset);
route.patch('/reset-password-done', UserController.resetPassword);

// Report's routes;

route.post('/new-report', ReportController.createReport)