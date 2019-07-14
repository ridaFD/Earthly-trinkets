import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsHome from './components/ProductsHome';
import SingleProduct from './components/SingleProduct';
import EventPage from './components/EventPage'
import JewelryCare from './components/JewelryCare';
import Contact from './components/Contact'; 
import Admin from './components/Admin'; 
import AdminProduct from './components/AdminProduct';
import AdminEvent from './components/AdminEvent';
import AdminJewelry from './components/AdminJewelry';



import Header from './components/Header';
import SingleEvents from './components/SingleEvent';
import SingleProducts from './components/SingleProduct';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

     }
  }

  render() { 
    return (
      <Router>
        <Switch>
          <Route path='/products' render={() => { return <div><ProductsHome /></div> }} />
          {/* <Route path='/singleProduct' render={() => { return <div><SingleProducts /></div> }} /> */}
          <Route path='/events' render={() => { return <div><EventPage /></div> }} />
          <Route path='/SingleEvent/:id' render={(props) => { return <div><SingleEvents {...props} /></div> }} />
          <Route path='/singleproduct/:id' render={(props) => { return <div><SingleProduct {...props} /></div> }} />
          <Route path='/contact' render={() => { return <div><Contact /></div> }} />
          <Route path='/jewelrycare' render={() => { return <div><JewelryCare /> </div> }} />
          {/* <Route path='/Adminevents' render={() => { return <div><Adminevent /> </div> }} /> */}
          <Route path='/Admin' render={() =>{return <div><Admin /></div>} }    />
          <Route path= '/product' render={() => {return <div><AdminProduct/></div>}} />
          <Route path= '/event' render={() => {return <div><AdminEvent/></div>}} />
          <Route path= '/jewelry' render={() => {return <div><AdminJewelry/></div>}} />




          <Route path='/' exact render={() => <div><HomePage /></div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
