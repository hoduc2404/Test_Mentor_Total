import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Carousel from '../Carousel';
import ProductFeature from '../../features/Product';

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <div>
      <Carousel />
      <ProductFeature />
    </div>
  );
}

export default HomePage;
