import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Social from './Social'
import Bar from './Bar';
import { MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { MDBCard, MDBCardBody } from "mdbreact";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          name: "",
          email :"",
          message:""
         }
this.handleSubmit= this.handleSubmit.bind(this)
    }
    handleChange = (event)=>{
      this.setState({[event.target.name]:event.target.value})

    }

async handleSubmit (event){
      event.preventDefault();
      const {name, email, message} = this.state
    


        const form = await fetch('http://localhost:8000/contact',
        {
          method:'POST',
      body:JSON.stringify({name, email, message}),
    headers:{'Content-Type':'application/json'}
  })
      }

    render() { 
    return (
  <div class="container">
    <Header /> 
    <section className="my-5">
              <h2 className="h1-responsive font-weight-bold text-center my-5"> About Us </h2>
            <p className="text-center w-responsive mx-auto pb-5">
                At Earthly Trinkets we make handcrafted jewelry one bead at a time. Each semi precious gem is chosen for its quality and beauty. we buy gemstones from all over the world to bring you jewelry that is unique and beautiful and of excellent quality.

                To most of us jewelry has special meaning and is very sentimental. We buy jewelry for special occasions, when we want a special keepsake for ourselves or someone dear.

                We create handmade jewelry in a variety of styles since we all have our own style. For a lot of us that style changes often, depending on the occasion and our mood. We also love combining and layering necklaces and bracelets. In addition to our more traditional pieces we have been making bohemian jewelry that is a bit more free and flowing and versatile.

                It is important to us that the jewelry we create gives you meaning and makes you feel more like you. The you who is free, confident and happy.
             </p>
    </section>
  <section className="contact-section my-5">
    
      <MDBCard>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form" >
            <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              <MDBRow>
                <MDBCol md="6">
                <br />
                  <div className="md-form mb-0">
                    Your name
                    <MDBInput type="text" onChange={this.handleChange} id="form-contact-name" name="name"
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                <br />
                  <div className="md-form mb-0">
                  Your email
                    <MDBInput 
                      type="text" onChange={this.handleChange}
                      id="form-contact-email" name="email"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                          
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                  Your message 
                    <MDBInput
                      type="textarea" onChange={this.handleChange}
                      id="form-contact-message" name="message"
                    />
                    <MDBBtn rounded color="blue" onClick={this.handleSubmit} type='submit'>
                      <MDBIcon icon="paper-plane" />
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
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
                       
    
    <Footer />
    </div>
        );
    }
}

export default Contact;