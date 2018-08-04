import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
class App extends Component {
    render() {
        return (
           
            <div>
                <Navbar/>
            </div>
          
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
export default App;