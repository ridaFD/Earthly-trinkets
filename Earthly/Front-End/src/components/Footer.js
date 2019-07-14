import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer id="footer">
<div className="footer-holder">
  <div className="footer-frame" >
    <div className="footer-content"  style={{width: '100%'}}>
      <div className="col-holder">
        <div className="col">
          <div className="heading">
            <h3>About us</h3>
          </div>
          <p >At Earthly Trinkets we make handcrafted jewelry one bead at a time. Each semi precious gem is chosen for its quality and beauty.
             we buy gemstones from all over the world to bring you jewelry that is unique and beautiful and of excellent quality.
             To most of us jewelry has special meaning and is very sentimental.</p>
        </div>
        <div className="col">
          <div className="heading">
            <h3>Contact</h3>
          </div>
          <address>
            <p><strong>Elegantic Inc.</strong></p>
            <p>1041 Madison Ave,</p>
            <p>Lebanon</p>
          </address>
          <address>
            <p>(45) 523 565 242</p>
            <p><a href="mailto:office@elegantic.com">office@elegantic.com</a></p>
          </address>
        </div>
        <div className="col col-contact">
          <div className="heading">
            <h3>Follow us</h3>
          </div>
          <ul className="social">
            <li className="facebook"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
            <li className="instagrame"><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
            <li className="twitter"><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="holder">
        <p>Copyright 2019 Elegantic. All rights reserved.</p>
      </div>
    </div>
  </div>
</div>
</footer>	
         );
    }
}
 
export default Footer;

