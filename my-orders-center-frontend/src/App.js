import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import {NavBar} from './components/NavBar'
import {Home} from './components/Home'
import OrderForm from './components/OrderForm'
import {fetchOrders} from './actions/orders'

import OrdersList from  './components/OrderList'
import OrderDetails from './components/OrderDetails';

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
                                        
                    <Route exact path={`/orders/:orderId`} 
                        render={(props)=>{

                            // console.log(orders)
                            // console.log(props.match.params.orderId)

                            const order = orders.find(order=>order.id===props.match.params.orderId)

                            // console.log(order)
                            return <OrderDetails order={order} {...this.props}/>
                    }} />   
                </Switch>      


                
                <Route exact path='/'
                    component ={ Home }/>
                

                     
            </div>
          );        
    }
}

export default connect(({orders})=>({orders}), {fetchOrders} )(App);

