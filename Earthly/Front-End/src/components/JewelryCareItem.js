import React from 'react'

class JewelryCareItem extends React.Component {

    constructor(props){
        super(props)
    }

    render()
    {
        return(
            <div id="c909" className="
            content--element
            dynamicteaser
            col-xs-12 col-sm-12 col-md-12 col-lg-12 
            dynamicteaser__landscape " style={{marginLeft:'0%'}}>
            
                <div className="dynamicteaser--image">
                    
                            <a className="dynamicteaser--link" href="#">
                                <img title="TAMARA COMOLLI How to clean fine jewelry" alt="TAMARA COMOLLI How to clean fine jewelry" src={`http://localhost:8000/images/${this.props.x.ImgCare}.jpg`}width="696" height="456"/>
                            </a>
                        
                </div>
                    
                <div className="dynamicteaser--text">     
                        <h3 className="text--big dynamicteaser--title">{this.props.x.Title}</h3>
                        <span className="dynamicteaser--subtitle">{this.props.x.Description}</span>
                        {/* <a href="#" className="dynamicteaser--link">Read more</a> */}
                </div>

            </div>
        )
    }
}

export default JewelryCareItem;