import React, { Component } from 'react';
import List from './categories/List';
import Add from './categories/Add';
import Edit from './categories/Edit';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Categories extends Component {
    render() {
        return (
            <div>
                <Router>   
                    <div>
                    <Link to='/categories/add' className="btn btn-primary mr-2"><i className="fa fa-plus"></i>Add</Link>
                    <Link to='/categories/edit'></Link>
                    <Link to='/categories' className="btn btn-primary"><i className="fa fa-bars"></i>Show</Link>

                    <Route exact  path='/categories' component={List} />
                    <Route  path='/categories/add' component={Add} />
                    <Route  path='/categories/edit' component={Edit} /> 
                    </div>
                    
                </Router>
            </div>
           
        );
    }
}

export default Categories;