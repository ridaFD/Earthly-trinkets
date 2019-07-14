import React, { Component } from 'react';

class AdminProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            adminproduct: []
         }
    }
   

    async componentDidMount() {

		const response1 = await fetch(`http://localhost:8000/api/products`);
		const json1 = await response1.json()
		this.setState({ adminproduct: json1.data })
		console.log(this.state.adminproduct)
	}

     deleteProduct=async(id) =>{
         console.log('delete', id)
        const url = `http://localhost:8000/api/product/delete/${id}`
        const response = await fetch(url);
            console.log('iam here')
     }


    render() { 
        return ( 
            <div>
                    
                        {this.state.adminproduct.map( (item) => <div>
                    
                        <table>
                            <tr>
                                <th>{item.Name}</th>
                                <th>{item.Price}</th>
                                <th>{item.Material}</th>
                                <th>{item.Description}</th>
                                <th>{item.Category}</th>
                                <th>{item.Date}</th>
                                <th>{item.ImgName}</th>
                            </tr>
                        </table>
                        <button onClick={()=> this.deleteProduct(item.ProductsID)}><strong>delete</strong></button>
                        </div>)}
                        {/* {console.log(this.props)} */}
                    
            </div>
         );
    }
}
 
export default AdminProduct;