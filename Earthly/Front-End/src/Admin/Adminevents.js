import React, { Component } from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

// const columns = ["Person Name", "Age", "Company Name", "Country", "City"];

// const data = [
//   ["Aurelia Vega", 30, "Deepends", "Spain", "Madrid"],
//   ["Guerra Cortez", 45, "Insectus", "USA", "San Francisco"],
//   ["Guadalupe House", 26, "Isotronic", "Germany", "Frankfurt am Main"],
//   ["Elisa Gallagher", 31, "Portica", "United Kingdom", "London"]
// ];


class Adminevent extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
          cares: []
  }
}

async componentDidMount() {
  const response = await fetch(`http://localhost:8000/api/jewelrycares`);
  const json = await response.json();
  this.setState({ cares: json.data})
  console.log(this.state.cares)
}

  render()
  {

     
      return(
         <div>
        
                 
         {
          <p>hghghgh</p>
              
          })
         }
         </div>
         
      );
      
  }
  
}

export default Adminevent;
