import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/pages/homePage/Home'
import Footer from './components/footer/Footer';
import Services from './components/pages/services/Services';
import SignUp from './components/pages/SignUp/SignUp';
import Products from './components/pages/products/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/services' component={Services} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
