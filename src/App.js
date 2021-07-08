import './App.scss';
import { BrowserRouter as Router, 
  Switch,
  Route,
} from "react-router-dom";

import React from 'react';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Projets from './Components/Projets';
import Contact from './Components/Contact';
import Cv from './Components/Cv';
import NotFound from './Components/NotFound';

const App = () => {
  
  return (
    <Router>
      <div className="main--container">
        <Switch>
            <Route exact path="/">
                <Header />
                <Main />
                <Footer />
            </Route>
            <Route path="/cv">
              <Header />
              <Cv /> 
            </Route>
            <Route path="/projets">
              <Header />
              <Projets />
            </Route>
            <Route path="/contact">
              <Header />
              <Contact />
            </Route>
            <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
