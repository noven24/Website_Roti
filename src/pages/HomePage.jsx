import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <Categories />
      <ProductList />
    </>
  );
};

export default HomePage;
