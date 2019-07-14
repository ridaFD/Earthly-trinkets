import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LatestProducts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          newitem: []
         }
    }

    async componentDidMount(){
      try{
          const response = await fetch(`http://localhost:8000/api/images/newProducts`);
          let newitem = await response.json();
          newitem = newitem.data;
          this.setState({
            newitem
          })
          console.log(this.state.newitem)
      }
      catch(err){
          console.log(err)
      }
  }

  render() { 
        return ( 
            <div>
            {this.state.newitem.map(item => <div>
                      <div className="box" style={{marginLeft: '10px', height: '300px', marginTop:'10px'}}>
                <a href="#">
                  <span className="bg" />
                    
                  <img src={`http://localhost:8000/images/${item.ImgName}.jpg`} className='new-item' style={{height: '300px'}} alt='dgdgdgag'/>
                  <div className="box-info">
                    <div className="box-info-holder">
                      <span className="title"><span></span></span>
                      <h2>{item.Name}</h2>
                      <span className="btn white normal">More new suits</span>
                    </div>
                  </div>
                </a>
              </div>
              </div>)}
 
            </div>
         );
    }
}
 
export default LatestProducts;