import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import productApi from './api/productApi';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import ProductFeature from './features/Product';
import RegisterJsx from './features/Athu/RegisterJsx/RegisterJsx';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home/*" element={<HomePage />} />
        <Route path="/products/*" element={<ProductFeature />} />
        <Route path="/register" element={<RegisterJsx />} />


        

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
