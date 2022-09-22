import React from 'react';
import './styles.scss';

Carousel.propTypes = {};

function Carousel(props) {
  return (
    <div className="slider">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-l">
                <div className="item">
                  <img src={require('../../img/image4.png')} alt="" />
                </div>
              </div>
              <div className="col-r">
                <div className="item">
                  <h3>Product name</h3>
                  <p>Product description...</p>
                  <button>By Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-l">
                <div className="item">
                  <img src={require('../../img/image4.png')} alt="" />
                </div>
              </div>
              <div className="col-r">
                <div className="item">
                  <h3>Product name</h3>
                  <p>Product description...</p>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item row">
            <div className="row">
              <div className="col-l">
                <div className="item">
                  <img src={require('../../img/image4.png')} alt="" />
                </div>
              </div>
              <div className="col-r">
                <div className="item">
                  <h3>Product name</h3>
                  <p>Product description...</p>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span aria-hidden="true">
            <i
              className="fa-solid fa-caret-left"
              style={{ fontSize: '80px', color: '#cbc9c9', marginRight: '150px' }}
            ></i>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span aria-hidden="true">
            <i
              className="fa-solid fa-caret-right"
              style={{ fontSize: '80px', color: '#cbc9c9', marginLeft: '150px' }}
            ></i>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
