import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path=":productId/" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default ProductFeature;
