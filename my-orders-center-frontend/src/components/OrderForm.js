import React from 'react'

class OrderInput extends React.Component{
    render(){
        return (
            <div class="container">
                <h2>Add Order to Track</h2>
                <form >
                    <div class="form-group">
                        <label for="order_id" class="col-form-label">Order number</label>
                        <div class="col-sm-8">
                        <input type="email" name="nr" class="form-control form-control-sm" id="order_id" placeholder=""/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="site" class="col-form-label">Store</label>
                        <div class="col-sm-8">
                            <input type="email" name="site" class="form-control form-control-sm" id="site" placeholder=""/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="order_notes" class="col-form-label"> Notes</label>
                        <div class="col-sm-8">
                            <textarea class="form-control form-control-sm" id="order_notes" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="form-group mt-3">
                    <button type="submit" class="btn btn-dark">Add Order</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default OrderInput;