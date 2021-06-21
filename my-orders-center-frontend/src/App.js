import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import {NavBar} from './components/NavBar'
import {Home} from './components/Home'
import OrderForm from './components/OrderForm'
import {fetchOrders} from './actions/orders'

import OrdersList from  './components/OrderList'

class App extends React.Component {
    componentDidMount(){
        this.props.fetchOrders();
    }

    render(){
        return (
            <div>              
                <NavBar />
                <Route 
                exact path='/orders/new' 
                render={()=><OrderForm />}/>
                <Route 
                exact path='/orders' 
                render={()=><OrdersList/>}/>
                <Route 
                exact path='/'  
                render={()=><Home />}/>
            </div>
          );        
    }
}

export default connect(null, {fetchOrders} )(App);

