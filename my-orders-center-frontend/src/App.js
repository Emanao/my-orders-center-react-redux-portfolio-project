import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import {NavBar} from './components/NavBar'
import {Home} from './components/Home'
import OrderForm from './components/OrderForm'
import { fetchOrders } from './actions/orders'
import { loadNotesRequest } from './actions/notes'

import OrdersList from  './components/OrderList'
import OrderContainer from './components/OrderContainer';

class App extends React.Component {
    componentDidMount(){
        console.log("in aApp. Loading")

        this.props.fetchOrders();
        this.props.loadNotesRequest()
    }

    render(){
        const {orders}=this.props;
        return (
            <div>              
                <NavBar />

                <Switch>       
                    <Route exact path='/orders/new'
                        component={ OrderForm }/>
                    
                    <Route exact path='/orders' 
                        component= { OrdersList }/>
                                        
                    <Route path={`/orders/:orderId`} 
                        render={(routerProps)=>{

                            const order = orders.find(order=>order.id===routerProps.match.params.orderId)

                            return (!!order?  <OrderContainer {...routerProps} order={order} />:null  )
                            
                    }} />   
                </Switch>      

                <Route exact path='/'
                    component ={ Home }/>

            </div>
          );        
    }
}

export default connect(
    ({orders})=>({orders}), 
    {fetchOrders, loadNotesRequest} )
    (App);

