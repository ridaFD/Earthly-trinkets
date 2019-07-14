import React, { Component } from 'react';
import Header from './Header';
import EventList from './EventList';
import Social from './Social'; 
import Footer from './Footer'
import Bar from './Bar';

class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
     
        return ( 
            <div>
                
                <Header />
                <Bar />
                <EventList />
                <Footer />
            </div>
            
         );
    }
}
 
export default EventPage;