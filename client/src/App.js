import React from 'react';
import './index.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom';
import { IndexRoute } from './routes/index'
import {Footer} from './components/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <IndexRoute />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
