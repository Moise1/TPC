import express from 'express';
import {route} from './src/routes'


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(route)

// app.use('*', (req, res)=>{
//     return res.status(405).send('Method Not Allowed.');
// })
const port = process.env.PORT || 5000
app.listen(port , ()=> console.log(`App running on port ${port}`))