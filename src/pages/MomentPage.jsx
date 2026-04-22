import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const MomentPage = () => {
  const moments = [
    {
      title: 'BIRTHDAY',
      image: '/assets/birthday_moment.png'
    },
    {
      title: 'DESSERT',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'SNACKS',
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'GATHERING',
      image: '/assets/gathering_moment.png'
    },
    {
      title: 'COFFEE BREAK',
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'BREAKFAST',
      image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Page Title & Breadcrumb */}
        <div className="mb-12">
          <h1 className="text-[26px] font-medium text-brand-primary tracking-wide mb-1 font-sans">Choose Your Moment</h1>
          <div className="text-[12px] text-gray-800 font-medium flex gap-2">
             <Link to="/" className="cursor-pointer hover:text-brand-primary">Home</Link> 
             <span>/</span> 
             <span>Choose Your Moment</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {moments.map((moment, index) => (
            <div 
              key={index}
              className="aspect-square relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Background Image */}
              <img 
                src={moment.image} 
                alt={moment.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              
              {/* Orange Color Overlay */}
              <div className="absolute inset-0 bg-[#985827]/60 mix-blend-multiply group-hover:bg-[#985827]/40 transition-colors duration-500"></div>
              
              {/* Text */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <h2 className="text-white text-[24px] font-bold tracking-wide drop-shadow-md px-4 text-center">
                  {moment.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Product Recommendations */}
        <div className="mt-20 mb-8 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                name: 'Roti Tawar Kering (toast)',
                price: 25700,
                image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&q=80&w=600',
                isPreOrder: true,
                buttonText: 'add to cart'
              },
              {
                id: 2,
                name: 'Roti Bagelen',
                price: 33500,
                image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
                isPreOrder: true,
                buttonText: 'add to cart'
              },
              {
                id: 3,
                name: 'Roti Coklat Keju',
                price: 14200,
                image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600',
                isPreOrder: true,
                buttonText: 'add to cart'
              },
              {
                id: 4,
                name: 'Roti Mocca Mesis',
                price: 12000,
                image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=600',
                isPreOrder: true,
                buttonText: 'add to cart'
              },
              {
                id: 5,
                name: 'Roti Tawar Premium',
                price: 22000,
                image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
                isPreOrder: true,
                buttonText: 'add to cart'
              },
              {
                id: 6,
                name: 'Roti Gandum',
                price: 28000,
                image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&q=80&w=600',
                isPreOrder: true,
                buttonText: 'add to cart'
              }
            ].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MomentPage;

