import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import {BrowserRouter,Route  } from "react-router-dom";
import  Home  from "./components/Home";
import  Product  from "./components/Product";
import  UseCases  from "./components/UseCases";
import  WhyVyorius  from "./components/WhyVyorius";
import  Team  from "./components/Team";
import  Solution  from "./components/Solution";
import  Contact  from "./components/Contact";
import  Partners  from "./components/Partners";

class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route path="/Product" component={Product}/>
        <Route path="/UseCases" component={UseCases}/>
        <Route path="/WhyVyorius" component={WhyVyorius}/>
        <Route path="/Team" component={Team}/>
        <Route path="/Solution" component={Solution}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Partners" component={Partners}/>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
