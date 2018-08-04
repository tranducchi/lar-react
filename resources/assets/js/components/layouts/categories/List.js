import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class List extends Component {
    
    checkCondition(par){
        return (par ==1)? "Yes":"No"; 
    }
    constructor(){
        super();
        this.state={
            
            categories:[]
        }
    }
    componentDidMount(){
        axios.get('/api/categories')
        .then(response=>{
            this.setState({
                categories:response.data
            })
        })
    }
    render() {
        return (
            <div className="col-md-8 offset-md-2">
               <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Complete</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                  
                    <tbody>
                        {
                            this.state.categories.map(cat=>{
                                return (
                                    <tr>
                                    <th key={cat.toString()} scope="row">{cat.id}</th>
                                    <td>{cat.name}</td>
                                    <td>
                                        {this.checkCondition(cat.completed)}
                                    </td>
                                    <td><Link to='/categories/edit' className="fa fa-pencil btn btn-warning"></Link></td>
                                    </tr>
                                )
                               
                            })
                           
                        }
                       
                        
                    </tbody>
                    
                </table>
 
            </div>
        );
    }
}

export default List;