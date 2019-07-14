import React from 'react';
import JewelryCareItem from './JewelryCareItem';
import Header from './Header';
import Footer from './Footer';


class JewelryCare extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
            cares: []
		}
	}

	async componentDidMount() {
		const response = await fetch(`http://localhost:8000/api/jewelrycares`);
		const json = await response.json();
		this.setState({ cares: json.data})
		console.log(this.state.cares)
	}

    render()
    {

       
        return(
           <div>
            <Header />
                   
           {
            this.state.cares.map( listItem => {
                return <JewelryCareItem x= {{...listItem}} />
                
            })
           }
           <Footer />
           </div>
           
        );
        
    }
    
}

export default JewelryCare;