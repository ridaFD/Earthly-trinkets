import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import BuyingForm from './BuyingForm';
// import { Carousel } from "react-responsive-carousel";
import { Grid, Row, Col } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Table, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Carousel from 'react-bootstrap/Carousel'

class SingleProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleimage: [],
      singleproduct: []
    }
  }
  // async componentDidMount() {
  //   const id = this.state.match.params.id;
	// 	const response = await fetch(`http://localhost:8000/api/single/singleproduct/${id}`);
	// 	const json = await response.json();
	// 	this.setState({ singleimage: json.data})
	// 	console.log(this.state.singleimage)
	// }


  async componentDidMount(){
    const id = this.props.match.params.id;

    // console.log(id)
    try{
    const response = await fetch(`http://localhost:8000/api/single/singleproduct/${id}`);
    let singleimage = await response.json();
    singleimage = singleimage.data
    this.setState({singleimage})
    // console.log(singleimage)
    }
    catch(err){
      console.log(err)
    }
   
  
 

  
 

    try{
    const response1 = await fetch(`http://localhost:8000/api/product/${id}`);
    let singleproduct = await response1.json();
    singleproduct = singleproduct.data
    this.setState({singleproduct})
    console.log(singleproduct)
    }
    catch(err){
      console.log(err)
    }
   
  }
 

  render() {
    
    return (
      
      <div className="container"> 
      
  <Header />
  <section class="text-center my-5">

    <h2 class="h1-responsive text-center font-weight-bold my-5">PRODUCTS</h2>
    <br />
  </section>
  
  <MDBCard>
    <MDBRow>
      <MDBCol>

        <div class="view overlay rounded z-depth-2 mb-4">
          <div class="image">
          <div className = 'pic-slide'>
          




          {/* {this.state.singleimage.map(item => <div>
          <Carousel >
                <Carousel.Item >
                
                    <img
                        className="d-block w-100"
                        src={`http://localhost:8000/images/${item.ImgName}.jpg`}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
</div>)} */}

<Carousel autoPlay>
          {this.state.singleimage.map(item => <div>
                    <img src={`http://localhost:8000/images/${item.ImgName}.jpg`} alt= '4mlffmdf'/>
                
              </div>)}
      </Carousel> 











          {/* <Carousel autoPlay>
          {this.state.singleimage.map(item => <div>
                    <img src={`http://localhost:8000/images/${item.ImgName}.jpg`} alt= '4mlffmdf'/>
                <p className="legend">Legend 1</p>
              </div>)}
      </Carousel> */}
      
  </div>
          </div>
        </div>
      </MDBCol>
      <MDBCol></MDBCol>
      <MDBCol size='4'>

        <Table >
          <thead>
          </thead>
          
            <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{this.state.singleproduct.Name}</td>
            </tr>
            <tr>
              <th scope="row">Price</th>
              <td>{this.state.singleproduct.Price}</td>
            </tr>
            <tr>
              <th scope="row">Material</th>
              <td>{this.state.singleproduct.Material}</td>
            </tr>
            <tr>
              <th scope="row">Description</th>
              <td>{this.state.singleproduct.Description}</td>

            </tr>
          </tbody>
         
        
        </Table>
        
      </MDBCol>
      
      <MDBCol></MDBCol>
    </MDBRow>
    
    <MDBRow>
      <MDBCol sm='12'>
        <div>
          <h4 class="font-weight-bold mb-3"><strong>Name of the Products</strong></h4>
          <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus voluptas Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus voluptasNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                  quo minus id quod maxime placeat facere possimus voluptas.</p>

        </div>
      </MDBCol>
    </MDBRow>
  </MDBCard>
  
  <div class="buyform">
    <BuyingForm id={this.props.match.params.id} />
  </div>
    <Footer />

      </div>
      
    );
    
  }
}

export default SingleProducts;