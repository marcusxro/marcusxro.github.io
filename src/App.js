// App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { About } from './pages/AboutPage';
import Firstpage from './pages/ChaatAI';
import Secpage from './pages/Forcast';
import Thirdpage from './pages/Lexicon';
import PixieShop from './pages/PixieShop';
import Starbucks from './pages/Starbucks';
import Ulamfinder from './pages/Ulamfinder';

function App() { // v5 router
return (
   <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/ChaatAI"> 
           <Firstpage />
        </Route>
        <Route path="/Forcast"> 
           <Secpage />
        </Route>
        <Route path="/Lexicon"> 
           <Thirdpage />
        </Route>
        <Route path="/PixieShop"> 
           <PixieShop />
        </Route>
        <Route path="/Starbucks"> 
           <Starbucks />
        </Route>
        <Route path="/Ulamfinder"> 
           <Ulamfinder />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
