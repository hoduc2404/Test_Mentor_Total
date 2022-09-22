import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import productApi from './../../../api/productApi';

ListPage.propTypes = {};

function ListPage(props) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await productApi.getAll();
        setProductList(data);
      } catch (error) {
        console.log('Failed to fetch product list:', error);
      }
    })();
  }, []);

  return (
    <div>
      <ProductList data={productList} />
    </div>
  );
}

export default ListPage;
