import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import {NavBar} from './components/NavBar'
import {Home} from './components/Home'
import OrderForm from './components/OrderForm'
import {fetchOrders} from './actions/orders'

import OrdersList from  './components/OrderList'
import OrderContainer from './components/OrderContainer';

class App extends React.Component {
    componentDidMount(){
        this.props.fetchOrders();
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

                            // console.log(props)
                            // console.log(props.match.params.orderId)

                            const order = orders.find(order=>order.id===routerProps.match.params.orderId)

                            // console.log(order)
                            return <OrderContainer {...routerProps} order={order} />
                    }} />   
                </Switch>      


                
                <Route exact path='/'
                    component ={ Home }/>
                

                     
            </div>
          );        
    }
}

export default connect(({orders})=>({orders}), {fetchOrders} )(App);

