import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {contacts:[]};
  }

  componentDidMount() {
    axios.get('/contacts')
    .then(res => {
      this.setState({contacts: res.data});
      console.log(this.state.contacts);
    })    
    //this.setState({contacts:[{id:'12123131', name:'Linda', address:'H4E RDR'},{id:'12122342', name:'Mayo', address:'HXS DFR'}]})
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading" >
            <h3 className="panel-title">
              CONTACT LIST
            </h3>
          </div>
        </div>
        <div className="panel-body">
          <h4><Link to="/add">
            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true">Add Contact</span>
          </Link>
          </h4>
          <table class="table table-stripe">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>  
          </thead>  
          <tbody>
            {this.state.contacts.map(contact => (<tr><td><Link to={`/show/${contact.id}`}>{contact.name}</Link></td><td>{contact.address}</td></tr>))}
          </tbody>  
          </table>
        </div>
      </div> 
    );
  }
}

export default App;
