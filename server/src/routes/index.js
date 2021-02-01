import express from 'express';
import UserController from '../controllers/userController'
import ReportController from '../controllers/reportController';

export const route = express();

// User routes. 

route.post('/signup', UserController.signUp);
route.post('/login', UserController.Login);
route.get('/logout', UserController.Logout);
route.post('/request-password-reset', UserController.requestPasswordReset);
route.put('/complete-password-reset-process/:token', UserController.resetPassword);

// Report's routes;
route.get('/new-report', ReportController.allReports);
route.post('/new-report', ReportController.createReport);
route.get('/get-report/:id', ReportController.getOneReport)
route.patch('/new-report/:id', ReportController.updateColumn);