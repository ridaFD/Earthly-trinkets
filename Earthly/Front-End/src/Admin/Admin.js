import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { MDBInput } from "mdbreact";
import { MDBCol, MDBIcon, MDBRow } from "mdbreact";
import { Grid, Row, Col } from 'react-bootstrap';
import { MDBContainer} from "mdbreact";


class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div class="container" style={{padding:'0px',margin:"0px" ,height:'110px'}}>
  
 <nav class="navbar navbar-dark primary-color" >
 <div>
     <a class="navbar-brand" href="#">
        <img src={require('./logo.png')} height="150"  width="150" class="d-inline-block align-top"
            alt="mdb logo" /> 
     </a> 
  </div>  
  <br /> 
  <div>      
     {/* <section class="bar" style={{width:'700px' , height:'60px'}}> <div class="bar-frame">  */}
          <div className="d-flex align-items-end"  style={{size:'16'}}>         
                      <Nav.Link><Link to='/Admin'>Home</Link></Nav.Link>
                      <Nav.Link><Link to='/Adminproducts'>Products</Link></Nav.Link>

                      <Nav.Link><Link to='/Adminevent'>Events</Link></Nav.Link>
                      <Nav.Link><Link to='/Adminjewelrycare'>Jewelry Care</Link></Nav.Link>
                      <Nav.Link><Link to='/Admincontact'>Contact US</Link></Nav.Link>
          </div>
          {/* </div></section> */}
 </div>
 
                 
                   
   
</nav>
</div>

   


);
  }
}


export default AdminHome;
