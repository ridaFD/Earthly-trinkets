import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

class EventList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        events: []
      }
    }

	async componentDidMount() {

        const response2 = await fetch(`http://localhost:8000/api/events`);
        const json2 = await response2.json()
        this.setState({ events: json2.data })
        console.log(this.state.events)
      }
    
      render() {
        return (
			<div>
				<section id="main">
           <h2 className="h1-responsive text-center font-weight-bold my-5" 
           style={{height:'10px'}}>EVENTS</h2>

          
					<ul className="item-list">
						
                       {this.state.events.map( (item,index) => <div>
						<li>
							<div className="item">
								<div className="image"  key={item.ProductsID}>
                                <img  style={{width:'250px',height:'250px'}} className="img-fluid" src={`http://localhost:8000/eventimagesM/${item.Img}.jpg`} alt="Sample image" />

								<span className="name">{item.Title}</span>
							       	<Link to={{
                                        pathname:`/SingleEvent/${this.state.events[index].EventsID}`
                                         }}>
                                   <p>
                                      <strong> <MDBIcon icon="angle-right" /> Read more </strong> 
                                  </p>
                                </Link>
								</div>
							</div>
						</li>
				</div>)}					
					</ul>

                </section>	
                	
              
</div>

		);
	}

}
export default EventList;
