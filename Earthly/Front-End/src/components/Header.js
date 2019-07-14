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


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <MDBRow className='header'>

      <MDBCol size='30' style= {{display: 'flex',width: '100%',flexWrap: 'wrap'}}>
      <MDBCol size='2'>
        <div className="d-flex align-items-start">
          <img src={require('./images/logo.png')} style={{ width: '120px', height: '120px' }} />
        </div>
      </MDBCol>
        <div className="d-flex align-items-end yellow" style= {{ width: '600px'}} >

          <Link className= 'the-header lnl' to='/'>Home</Link>
          <Link className= 'the-header lnl' to='/products'>Products</Link>
          <Link className= 'the-header lnl' to='/events'>Events</Link>
          <Link className= 'the-header lnl' to='/jewelrycare'>Jewelry Care</Link>
          <Link className= 'the-header lnl' to='/contact'>Contact US</Link>
        </div>
        <MDBCol size='1'>
        <br />
        <MDBRow>
          <div className="d-flex">
            <a className="btn" href="#"> <i className="fab fa-facebook-f ss"></i> </a>
            <a className="btn" href="#"> <i className="fab fa-twitter ss"></i> </a>
            <a className="btn" href="#"> <i className="fab fa-instagram ss"></i> </a>
            <a className="btn" href="#"> <i className="fab fa-youtube ss"></i> </a>
          </div>
        </MDBRow>
      </MDBCol>
      </MDBCol>

    </MDBRow>

   


);
  }
}


export default Header;
