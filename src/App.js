import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About'
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Details from './components/Details';
import Home from './components/Home';
import Navbar from './components/Navbar';

import Portfolio from './components/Portfolio';
import PortfolioEdit from './components/PortfolioEdit';

function App() {
  const hubDesc = ['Description for hublot', 'Some Details', 'More Details'];
  return (
    <div className="App">
      <Router>

      <Navbar></Navbar>
      <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route  path="/about">
              <About></About>
            </Route>
            <Route  path="/portfolio">
              <Portfolio></Portfolio>
            </Route>
            <Route  path="/details-Hublet">
              <Details 
                title = "Hublet" 
                brief = "Watch Selling MERN Stack Website"
                desc = {hubDesc}
              />
            </Route>
            <Route  path="/portfolioedit">
              <PortfolioEdit></PortfolioEdit>
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
