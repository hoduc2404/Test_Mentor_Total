import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import productApi from './../../../api/productApi';
import ProductInfo from '../components/ProductInfo/ProductInfo';

DetailPage.propTypes = {};

function DetailPage(props) {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const results = await productApi.get(productId);
        setProduct(results);
        console.log(results);
      } catch (error) {
        console.log('Failed to fetch product', error);
      }
    })();
  }, [productId]);

  return (
    <div>
      <ProductInfo product={product} />
    </div>
  );
}

export default DetailPage;
