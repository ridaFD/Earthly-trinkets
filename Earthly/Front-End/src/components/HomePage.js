import React, { Component } from 'react';

import Boxes from './Boxes'
import Footer from './Footer'
import BlockAdvice from './BlockAdvice';
import Header from './Header';
import SlideShow from './Slider'
import Social from './Social'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div class="container">
                
                <Header />
                <SlideShow />
                <br />
                <Boxes />
                <BlockAdvice />
                <Footer />
            </div>
        );
    }
}
 
export default HomePage;