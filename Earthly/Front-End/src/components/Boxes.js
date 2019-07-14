import React, { Component } from 'react';
import LatestEvents from './LatestEventBoxes';
import LatestProducts from './LatestProductBoxes';

class Boxes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="container">
                  <div className="boxes">
                      <div>
                            <h2 class="h1-responsive font-weight-bold my-5">NEW PRODUCTS</h2>
                      </div>
                    <LatestProducts />
                    <br />
                    <div>
                            
                            <h2 class="h1-responsive font-weight-bold my-5">NEW EVENTS</h2>   
                            <br />                
                    </div>
                    
                    <LatestEvents />
               
            </div>
            </div>
         );
    }
}
 
export default Boxes;