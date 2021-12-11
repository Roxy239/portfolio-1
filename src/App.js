import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About'
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';

import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
     
      <Switch>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route  path="/about">
              <About></About>
            </Route>
            <Route  path="/portfolio">
              <Portfolio></Portfolio>
            </Route>
            <Route  path="/contact">
              <Contact></Contact>
            </Route>
            <Route  path="/blog">
              <Blogs></Blogs>
            </Route>
      </Switch>
      </Router>
     
    
      
    </div>
  );
}

export default App;
