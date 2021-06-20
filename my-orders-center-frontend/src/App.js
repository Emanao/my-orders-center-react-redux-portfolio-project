import React from 'react';

// import './App.css';

import OrderForm from './components/OrderForm'
import {NavBar} from './components/NavBar'

class App extends React.Component {
    render(){
        return (
            <div>
                <header className="navbar navbar-expand-lg navbar-light   bg-dark">
                    <NavBar />
                </header>
                <div>
                    <OrderForm/>
                    
                </div>
            </div>
          );        
    }
}

export default App;

