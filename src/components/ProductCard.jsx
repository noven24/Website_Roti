import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (product.isPreOrder) {
      dispatch(cartActions.addToCart(product));
    }
  };

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(product.price).replace(/\s/g, '');
  
  const formattedOldPrice = product.oldPrice ? new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(product.oldPrice).replace(/\s/g, '') : null;

  return (
    <div className="bg-white border border-gray-100 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300">
      
      {/* Fixed-height image area */}
      <div className="w-full h-[200px] overflow-hidden bg-gray-50 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      {/* Content area – flex-grow so it fills remaining space */}
      <div className="flex flex-col items-center flex-grow px-3 pt-4 pb-3 border-t border-gray-100">
        
        {/* Product name – fixed min-height so cards align */}
        <h3 className="text-[13px] text-gray-800 text-center font-medium leading-snug min-h-[36px] flex items-center justify-center px-1">
          {product.name}
        </h3>

        {/* Price block – always same height */}
        <div className="flex flex-col items-center mt-2 mb-2 min-h-[38px] justify-center">
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-[11px] font-medium tracking-wide leading-none">
              {formattedOldPrice}
            </span>
          )}
          <span className="text-[14px] font-semibold text-brand-primary mt-[2px] leading-none">
            {formattedPrice}
          </span>
        </div>

        {/* Stars */}
        <div className="flex space-x-[3px] mb-0">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-[13px] w-[13px] text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Button pinned to bottom */}
      {product.isPreOrder ? (
        <button 
          onClick={handleAddToCart}
          className="w-full py-[11px] mt-auto bg-brand-primary text-white font-medium text-[12px] uppercase tracking-wider hover:bg-brand-dark transition-colors duration-300 focus:outline-none"
        >
          {product.buttonText || 'Pre Order'}
        </button>
      ) : (
        <div className="w-full py-[11px] mt-auto bg-brand-light/30 border-t border-gray-100 flex items-center justify-center">
          <span className="text-[11px] text-brand-secondary font-medium text-center px-2">
            Available via Store, App, and Call Center
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
