import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import './App.css';
// components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Services from './Components/Pages/Services/Services';
import Team from './Components/Pages/Team/Team';
//import SignUp from './Components/Pages/SignUp/SignUp';
import Footer from './Components/Pages/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/team" component={Team} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
