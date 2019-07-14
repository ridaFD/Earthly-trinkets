import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { Carousel } from "react-responsive-carousel";
import { MDBCard, MDBCardBody } from "mdbreact";
import SingleProducts from './SingleProduct';
class BuyingForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          buy: [],
          name:'',
          email: '',
          phonenumber: '',
          productsid: '',
          quantity: '',
          message: ''
         }
    }

    componentDidMount() {
      console.log("i am here",this.props)
      this.setState({productsid:this.props.id})
      // this.setState({productsid:this.props.SingleProduct.ProductsID})

      
    //   const response = await fetch(`http://localhost:8000/api/buy/`);
    //   const json = await response.json()
    //   this.setState({ buy: json.data })
    //   console.log(this.state.buy)
    }
handleChange = event =>{
  this.setState({[event.target.name]:event.target.value})
  //console.log("i am here",this.props)
  /* const id = this.props.singleproduct.ProductsID;
  console.log(id)
  this.setState({productsid:id}) */
}
handleClick = async (e) =>{
 // e.preventDefault();
//  this.setState({productsid:this.props.singleproduct.ProductsID})
//  this.setState({productsid:this.props.id})

  
  const {name,email,phonenumber,productsid ,quantity,message} = this.state

try{
  const form = await fetch('http://localhost:8000/api/buy/',{
    method:"POST",
    body:JSON.stringify({name,email,phonenumber,productsid,quantity,message}),
    headers:{'Content-Type':'application/json'}

  })

}
catch(err){
  console.log(err)
}
}
    render() { 
        return ( 
<div class="buy">
			
			<section className="contact-section my-5">
      <MDBCard>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form">
              <h3 className="mt-4">
                <MDBIcon icon="envelope" className="pr-2" />
                Buying Form:
                
              </h3>
              {/* {this.state.buy.map(item => 
              <div> */}
                <MDBRow>
                <MDBCol md="6">
                <br />
                
                  <div className="md-form mb-0">
                    Your name
                    <MDBInput

                      type="text"
                      id="form-contact-name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      name ="name"
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                <br />
                  <div className="md-form mb-0">
                  Your email
                    <MDBInput
                      type="text"
                      id="form-contact-email"
                      name ="email"
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                  Your phone
                    <MDBInput
                      type="text"
                      id="form-contact-phone"
                      name="phonenumber"
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                      Quantity
					           <MDBInput
                      type="number"
                      id="form-contact-phone"
                      name="quantity"
                      onChange={this.handleChange}
                    /> 			
                 </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                  Your message
                    <MDBInput
                      type="textarea"
                      id="form-contact-message"
                      name="message"
                      onChange={this.handleChange}
                    />
                    <MDBBtn rounded color="blue">
                      <MDBIcon icon="paper-plane" onClick={ this.handleClick} />
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
                  {/* </div>
                  )} */}
             
              
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="3">
            <MDBCardBody className="contact text-center h-100 white-text">
              <h3 className="my-4 pb-2">Contact information</h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p>
                    <MDBIcon icon="map-marker-alt" className="pr-2" />
                    New York, 94126 USA
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="phone" className="pr-2" />+ 01 234 567 89
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="envelope" className="pr-2" />
                    contact@example.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </section>
   
</div>
        )
    }
}
    export default BuyingForm;