import React, { Component } from 'react';
import axios from 'axios';
class Add extends Component {
    constructor(){
        super();
        this.state={
            categories_name:'',
            completed:''
        }
    }
    addData(e){
        e.preventDefault();
        axios.post('')
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center">Add Categories</h3>
                <form onSubmit={this.addData}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Categories Name</label>
                        <input type="text" className="form-control" id="category_name" aria-describedby="emailHelp" placeholder="Enter categories" />
                        <small id="emailHelp" className="form-text text-muted">You must press categories name for field</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Complete</label>
                        <select className="form-control" onChange={this.getCompleted}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>

            </div>
        );
    }
}

export default Add;