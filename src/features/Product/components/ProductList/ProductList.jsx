import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

function ProductList({ data }) {
  return (
    <div>
      <section className="product-feature">
        <div className="container">
          <h2>-Product Feature-</h2>
          <div className="row">
            {data.map((product) => (
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
