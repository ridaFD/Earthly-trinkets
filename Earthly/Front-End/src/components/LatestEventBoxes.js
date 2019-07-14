import React, { Component } from 'react';

class LatestEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newEvent:[]
        }
    }
    async componentDidMount(){
      try{
          const response = await fetch(`http://localhost:8000/api/eventImages`);
          let newEvent = await response.json();
          newEvent = newEvent.data;
          this.setState({
            newEvent
          })
          console.log(this.state.newEvent)
      }
      catch(err){
          console.log(err)
      }
  }






    
          // <div>
          //   {this.state.newEvent.map(item => <div>
          //             <div className="box" >
          //       <a href="#">
          //         <span className="bg" />
                    
          //         <img src={`http://localhost:8000/eventImages/${item.Img}.jpg`} className='new-event' alt='event'/>
                  
          //       </a>
          //     </div>
          //     </div>)}
 
          //   </div>

          render() { 
            return ( 
    

            <div>
            {this.state.newEvent.map(item => <div>
            <div className="box" style={{marginLeft: '10px', height: '300px', marginTop:'10px'}}>
              <a href="#">
                   <span className="bg" />
               <img src={`http://localhost:8000/eventimagesM/${item.Img}.jpg`} style={{height: '300px',padding: '9px'}}/>  
            {/* <img src={require('./images/img-01.jpg')} alt /> */}
                   <div className="box-info">
                     <div className="box-info-holder">
                       <span className="title">{<h2>{item.Date}</h2>}<span><h5>{item.Title}</h5></span></span>
                       
                       <span className="btn white normal">More new suits</span>
                     </div>
                   </div>
                 </a>
               </div>
               {/* <div className="box" style={{marginRight: '30px', height: '300px'}}>
                 <a href="#">
                   <span className="bg" />
                   <img src={require('./images/img-02.jpg')} alt />
                   <div className="box-info">
                     <div className="box-info-holder">
                       <span className="title"><span>Sale</span></span>
                       <h2>all Jackets 50% off</h2>
                       <span className="btn white normal">See products</span>
                     </div>
                   </div>
                 </a>
               </div>
               <div className="box" style={{marginBottom: '50px', height: '300px'}}>
                 <a href="#">
                   <span className="bg" />
                   <img src={require('./images/img-03.jpg')} alt />
                   <div className="box-info">
                     <div className="box-info-holder">
                       <span className="title"><span>Hot</span></span>
                       <h2>Offer for real men</h2>
                       <span className="btn white normal">Be a real men</span>
                     </div>
                   </div>
                 </a>
               </div> */}
             </div>)}
             </div>
         );
         
    }
}

 
export default LatestEvents;