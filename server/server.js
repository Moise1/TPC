import express from 'express';
import {route} from './src/routes'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(route)


if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port = process.env.PORT || 5000
app.listen(port , ()=> console.log(`App running on port ${port}`))