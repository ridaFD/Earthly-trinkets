import React, { Component } from 'react';
import Header from './Header';
import ProductsList from './ProductsList';
import Footer from './Footer'
import Social from './Social';

class ProductsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            
                <Header />
                    <ProductsList />
                <Footer />
            </div>
         );
    }
}
 
export default ProductsPage;