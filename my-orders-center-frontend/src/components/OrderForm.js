import React from 'react'
import { connect } from 'react-redux'
import { createOrderRequest } from '../actions/orders'


class OrderForm extends React.Component{
    state={
        nr: "",
        site:"",
        description:""
    }
    handleChange = event => this.setState({[event.target.name]:event.target.value})

    handleSubmit = event=>{
        event.preventDefault();
        this.props.createOrderRequest({order: this.state},this.props.history);
        this.setState({
            nr: "",
            site:"",
            description:""
        })        
    }

    render(){
        return (
            <div className="container">
                <h3>Add Order</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="order_id" className="col-form-label">Order number</label>
                        <div className="col-sm-8">
                        <input 
                        className="form-control form-control-sm" 
                        type="text" 
                        name="nr"
                        value={this.state.nr}
                        onChange={this.handleChange}
                        id="order_id" 
                        placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="site" className="col-form-label">Store</label>
                        <div className="col-sm-8">
                            <input 
                            className="form-control form-control-sm" 
                            type="text" 
                            name="site"
                            value={this.state.site} 
                            onChange={this.handleChange}
                            id="site" 
                            placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="col-form-label"> Description</label>
                        <div className="col-sm-8">
                        <input 
                            className="form-control form-control-sm" 
                            type="text" 
                            name="description"
                            value={this.state.description} 
                            onChange={this.handleChange}
                            id="description" 
                            placeholder=""/>                    
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <button 
                        type="submit" 
                        className="btn btn-dark">
                        Add Order
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {createOrderRequest})(OrderForm);