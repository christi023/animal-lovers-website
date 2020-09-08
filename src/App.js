import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
//import Services from './Components/Pages/Services/Services';
//import Products from './Components/Pages/Products/Products';
//import SignUp from './Components/Pages/SignUp/SignUp';
//import Footer from './Components/Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
