import React from 'react';
import './styles.scss';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-top">
            <div className="col">
              <div className="item">
                <h4>GET HELP</h4>
                <p>Contact us</p>
                <p>Shopping</p>
                <p>NIKEiD</p>
                <p>Nike+</p>
              </div>
            </div>
            <div className="col">
              <div className="hr"></div>
              <div className="item">
                <h4>ORDERS</h4>
                <p>Payment options</p>
                <p>Shipping and delivery</p>
                <p>Returns</p>
              </div>
            </div>
            <div className="col">
              <div className="hr"></div>
              <div className="item">
                <h4>REGISTER</h4>
                <p>
                  Create one account to manage everything you do with Nike , from your shopping preferences to your Nike
                  + activity.
                </p>
                <a href="#">Learn more </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="col">
              <div className="item">
                <h4>EMAIL SIGN UP</h4>
                <p>Be the first to know about new product and special offers. </p>
                <a href="#">Sign up now </a>
              </div>
            </div>
            <div className="col">
              <div className="hr"></div>
              <div className="item">
                <h4>GIFT CARDS </h4>
                <p>Give the gift that always fits.</p>
                <a href="#">View cards</a>
              </div>
            </div>
            <div className="col">
              <div className="hr"></div>
              <div className="item">
                <h4>STORES NEAR YOU</h4>
                <p>Local a Nike retail store or authorized retailer.</p>
                <a href="#">Search</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-footer"></div>
    </footer>
  );
}

export default Footer;
