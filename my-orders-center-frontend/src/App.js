import React from 'react'
import OrderForm from './components/OrderForm'
import './App.css';

class App extends React.Component {
    render(){
        return (
            <div>
                <header className="App-header">
                    My Orders Center
                </header>
                <div>
                    <OrderForm/>
                    
                </div>
            </div>
          );        
    }
}

export default App;

