import React, { Component } from 'react';
import Content from './layouts/Content';
import Contact from './layouts/Contact';
import Categories from './layouts/Categories';
import About from './layouts/About';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            
          
            <Router>  
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link to='/' className="navbar-brand">Application</Link>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                <Link to='/about' className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                <Link to='/contact' className="nav-link">Contact</Link>
                                </li>
                                <li className="nav-item">
                                <Link to='/categories' className="nav-link">Categories</Link>
                                </li>

                            </ul>
                        
                        </div>
                    </nav>
                <Route exact path='/' component={Content}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/categories' component={Categories}/>
              </div>   
            </Router>
           
        );
    }
}

export default Navbar;