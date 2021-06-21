import React from 'react';
import { Route } from 'react-router-dom';

import {NavBar} from './components/NavBar'
import OrderForm from './components/OrderForm'
import {Home} from './components/Home'

class App extends React.Component {
    render(){
        return (
            <div>              
                <NavBar />
                <Route exact path='/orders/new' render={()=><OrderForm />}/>
                <Route exact path='/'  render={()=><Home />}/>
            </div>
          );        
    }
}

export default App;

