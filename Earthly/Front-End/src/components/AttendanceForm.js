import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { MDBCard, MDBCardBody } from "mdbreact";
class AttendanceForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          options: [
            {
              text: "Option 1",
              value: "1"
            },
            {
              text: "Option 2",
              value: "2"
            },
            {
              text: "Option 3",
              value: "3"
            }
            ]

         };
    }
    render() { 
        return ( 
<div class="aform">
				
	<section className="contact-section my-5">
    <MDBCard>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form">
              <h3 className="mt-4">
                <MDBIcon icon="envelope" className="pr-2" />
                Attendance Form:
                
              </h3>
              <MDBRow>
                <MDBCol md="6">
                <br />
                  <div className="md-form mb-0">
                    Your name
                    <MDBInput
                      type="text"
                      id="form-contact-name"
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
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                      Events Title
                      <MDBInput
                      type="text"
                      id="form-event-title"
                    />
                  </div>
                      {/* {this.state.options.map((opt,index)=>{
                            return(
                                <div key={index}>
                                
                                <select className="browser-default custom-select">
                                        <option>Choose your option</option>
                                        <option value='1'> {opt.text} </option>
                                        <option value='2'>{opt.text}></option>
                                        <option value='3'>{opt.text}</option>
                                    </select>
                                </div>
                            )   
                      }
                   )}    */}
                 {/* </div> */}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                  Your message
                    <MDBInput
                      type="textarea"
                      id="form-contact-message"
                    />
                    <MDBBtn rounded color="blue">
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
   
</div>
        )
    }
}
    export default AttendanceForm;
