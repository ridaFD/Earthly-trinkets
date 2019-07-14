import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { MDBContainer } from 'mdbreact';
import AttendanceForm from './AttendanceForm';
import {  Table} from "mdbreact";

class SingleEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
          singlevent: []
        }
      }
    
      // async componentDidMount() {
    
      //   const response3 = await fetch(`http://localhost:8000/api/OneEvent`);
      //   const json3 = await response3.json()
      //   this.setState({ singlevent: json3.data })
      //   console.log(this.state.singlevent)
      // }
    async componentDidMount(){
      const id = this.props.match.params.id;
      console.log(id)
      try{
      const response = await fetch(`http://localhost:8000/api/OneEvent/${id}`);
      let singlevent = await response.json();
      singlevent = singlevent.data
      this.setState({singlevent})
      }
      catch(err){
        console.log(err)
      }
     
    }
  render() {
        return (
       this.state.singlevent?
       <div className="container">     
      
            <Header />
          
            <h2 className="h1-responsive text-center font-weight-bold my-5" 
           style={{height:'10px'}}>EVENTS</h2> 
                <div className="flex-center">
                     <div className="col-lg-12 col-md-12 mb-lg-0 mb-12">
                        <MDBCard>
                     <MDBRow>
                         <MDBCol> 
                             <div className="view overlay rounded z-depth-2 mb-4">
                                       <img className="img-fluid" src={`http://localhost:8000/eventimagesM/${this.state.singlevent.Img}.jpg`} alt="Sample image" />
                              </div>
                          </MDBCol>
                          <MDBCol>     
                          <Table ><thead> </thead>
                              <tbody>
                              <tr>
                                  <th scope="row">Workshop about</th>
                                  <td>
                                     <a className="font-weight-bold mb-3">{this.state.singlevent.Title}</a>
                                  </td>
                              </tr>
                              {/* <tr><td> 
                              <p>by <a className="font-weight-bold">Earthly trinkles,</a></p>
                              </td></tr>*/}
                              <tr> 
                                  <th scope="row"> Date </th>
                                  <td><a className="eventdate">{this.state.singlevent.Date} </a></td>
                              </tr>
                              <tr>
                              <th scope="row"> Time </th>
                                  <td><a className="eventdate">{this.state.singlevent.Time} </a></td>
                              </tr>
                              <tr>
                              <th scope="row"> Address </th>
                                  <td><a className="eventdate">{this.state.singlevent.Address} </a></td>
                              </tr>
                              <tr>
                              <th scope="row"> Description </th>
                                  <td><a className="eventdate">{this.state.singlevent.Description} </a></td>
                              </tr>
                              
</tbody>
</Table>

                            
                         </MDBCol>  
                      </MDBRow> 
                </MDBCard>
                    </div> 
                </div>
                      
                        <br/>
                        
                        <AttendanceForm />
                        <Footer />  
     </div>:<div></div>
    );
}
} 
                   
//               {/* <Header />
//               <div className="text-center my-5">
//                   <h2 className="h1-responsive text-center font-weight-bold my-5">EVENTS</h2>
//                   <br />
//               </div>    
            
//               {this.state.singlevent.map(item=>
//         <div>

// <div className="row">
//                               <div className="col-lg-12 col-md-12 mb-lg-0 mb-12">
//                                    <div className="view overlay rounded z-depth-2 mb-4">
//                                        <img className="img-fluid" src={`http://localhost:8000/eventimages/${item.Img}`} alt="Sample image" />
//                                    </div>
//                                  <h4 className="font-weight-bold mb-3"><strong>{item.Title}</strong></h4>
//                                   <p>by <a className="font-weight-bold">Earthly trinkles,</a>
//                                      <a className="eventdate">{item.Date} </a>
//                                      <a className="eventdate">{item.Address} </a>
//                                   </p>
//                                   <p className="dark-grey-text">{item.Description}</p>
//                               </div> 
//                         </div>          
//                         <br/>


//         </div>
//         )}


           

 
export default SingleEvents;