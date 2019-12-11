import React,{Component,Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch} from 'react-router-dom';
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';
import Cart from './Cart/Cart';
import Details from './components/Details';
import Defaults from './components/Defaults';
import Modal from './components/Modal';

class App extends Component {
  render(){
     return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Defaults}/>
      </Switch>
      <Modal />
    </Fragment>
  );
  }
}
 

export default App;
