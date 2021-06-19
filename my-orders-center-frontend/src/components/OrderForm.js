import React from 'react'

class OrderInput extends React.Component{
    state={
        nr: "",
        site:"",
        notes:""
    }
    handleChange = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return (
            <div className="container">
                <h2>Add Order to Track</h2>
                <form >
                    <div className="form-group">
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
                        <label htmlFor="order_notes" className="col-form-label"> Notes</label>
                        <div className="col-sm-8">
                            <textarea 
                            className="form-control form-control-sm" 
                            name="notes"
                            value={this.state.notes}
                            onChange={this.handleChange}
                            id="order_notes" 
                            rows="3">              
                            </textarea>
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

export default OrderInput;