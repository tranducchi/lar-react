import React, { Component } from 'react';

class Edit extends Component {
    constructor(){
        super();
        console.log('Hello world');
    }
    componentWillMount(){
        console.log('Component Will Mount');
    }
    componentDidMount(){
        console.log('Component Did Mount');
    }
    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center">Update</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Categories Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Complete</label>
                        <select className="form-control">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>

            </div>
        );
    }
}

export default Edit;