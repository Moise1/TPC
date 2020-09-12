import express from 'express';
import {route} from '../src/routes'


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(route)

const port = 3000
app.listen(port , ()=> console.log(`App running on port ${port}`))