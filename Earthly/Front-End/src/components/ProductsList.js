import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

class ProductsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
	}

	async componentDidMount() {

		const response1 = await fetch(`http://localhost:8000/api/products`);
		const json1 = await response1.json()
		this.setState({ products: json1.data })
		// console.log(this.state.products)
	}

	render() {
		return (
			<div>
				<section class="bar">
					<div class="bar-frame">
					</div>
				</section>
				<section id="main">
					<div class="top-bar">
						<ul class="paging">
							<li class="prev"><a href="#">prev</a></li>
							<li><a href="#">1</a></li>
							<li class="active"><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li class="next"><a href="#">next</a></li>
						</ul>
						
						
					</div>

					<ul className="item-list">

						{this.state.products.map((item, index) =>
							<li>
								<div className="item" >
									<div className="image" key={item.ProductsID} >
										<img src={`http://localhost:8000/images/${item.ImgName}.jpg`} alt="hjk" style={{width: '200px', height: '200px'}} />

										<span className="name">{item.Name}</span>
										<span className="price">{item.Price}$</span>
										
										<span><Link to={{pathname: `/singleproduct/${this.state.products[index].ProductsID}`}}>
										<p>
                                      <strong> <MDBIcon icon="angle-right" /> Read more </strong> 
                                  </p>
										</Link></span>

									</div>
								</div>
							</li>
						)}

					</ul>

					<div class="top-bar top-bar-add">
						<ul class="paging">
							<li class="prev"><a href="#">prev</a></li>
							<li><a href="#">1</a></li>
							<li class="active"><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li class="next"><a href="#">next</a></li>
						</ul>
					</div>
				</section>

				

				)}
</div>

		);
	}

}
export default ProductsList;