import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Route, Router} from 'react-router-dom'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
    }


    
    render() { 
        return ( 
            <div>
            
                
                <Link to='/product' ><Button className= 'product buttona'>product</Button></Link>
                <Link to='/event'><Button className= 'event buttona'>event</Button></Link>
                <Link to='/jewelry'><Button className= 'jewelry buttona'>jewelry</Button></Link>
            {console.log(this.state.adminproduct)}
            </div>

         );
    }
}
 
export default Admin;