// Router.js
import React, { Component, useEffect, useLayoutEffect } from 'react';
import HomePage from './pages/HomePage';
import { About } from './pages/AboutPage';
import Firstpage from './pages/ChaatAI';
import Secpage from './pages/Forcast';
import Thirdpage from './pages/Lexicon';
import PixieShop from './pages/PixieShop';
import Starbucks from './pages/Starbucks';
import Ulamfinder from './pages/Ulamfinder';

class Router extends Component {
  constructor() {
    
    super();
    this.state = {
      currentRoute: window.location.pathname,
    };
  }

  componentDidMount() {
    // Listen for changes in the URL
    window.addEventListener('popstate', () => {
      this.setState({ currentRoute: window.location.pathname });
    });
  }

  componentDidUpdate() {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }

  render() {

    const { currentRoute } = this.state;

    switch (currentRoute) {
      case '/home':
        return <HomePage />;
      case '/about':
        return <About />;
      case '/ChaatAI':
        return <Firstpage />;
      case '/Forcast':
        return <Secpage />;
      case '/Lexicon':
        return <Thirdpage />;
      case '/PixieShop':
        return <PixieShop />;
      case '/starbucks':
        return <Starbucks />;
      case '/ulamfinder':
        return <Ulamfinder />;
      default:
        return <div>404 - Not Found</div>;
    }
  }
}
export default Router;
