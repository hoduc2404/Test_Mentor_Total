import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function renderSize(arraySize) {
  if (arraySize) {
    return arraySize.map((sp,index) =>{
      return (
        <button  className="disables mx-2">
         { sp}
        </button>
      );
    })
  }
  
}
function renderRelated(arrayRelated){
  if (arrayRelated) {
    return arrayRelated.map((product,index) =>{
      return (
        <div className="col" key={product.id}>
        <div className="item">
          <div className="thumbnail">
            <img src={`${product.image}`} alt="" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div className="btn">
              <a href={`/products/${product.id}`}>Buy now</a>

              <span>${product.price}$</span>
            </div>
          </div>
        </div>
      </div>
      );
    })
  }
}
function ProductInfo({ product }) {
  return (
    <div>
      <section className="product_detail">
        <div className="container">
          <div className="row">
            <div className="left">
              <img src={`${product.image}`} alt={`${product.alias}`} />
            </div>

            <div className="right">
              <h2>${product.name}</h2>
              <p className="product-desc">${product.description}</p>
              <h4 className="size-text">Available Size</h4>

              <div className="size">
                {
                  renderSize(product.size)
                }
              </div>

              <h3 className="price">${product.price}</h3>
              <div className="group-input">
                <button className="disable">
                  +
                </button>
                <input id="number" type="text" value="1" className="input" />
                <button className="disable">-</button>
              </div>
              <div className="group-button">
                <button type="button">Add to cart</button>
              </div>
            </div>

          </div>
          <div className='row_related'>
                {
                  renderRelated(product.relatedProducts)
                }
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductInfo;
