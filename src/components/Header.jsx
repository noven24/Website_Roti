import React, { useState } from 'react';
import { Search, Menu, X, User, ShoppingCart } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import logo from "../assets/d'Bakery-logo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 0
    }).format(price).replace(/\s/g, '.');
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-brand-dark shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[90px]">
          
          <div className="flex items-center gap-10">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src={logo} 
                  alt="d'Bakery Logo" 
                  className="h-[50px] w-auto object-contain" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-6">
              <Link to="/menu" className="text-[15px] font-medium hover:text-brand-primary transition-colors">Menu</Link>
              <Link to="/social" className="text-[15px] font-medium hover:text-brand-primary transition-colors">Social</Link>
              <Link to="/news-promo" className="text-[15px] font-medium hover:text-brand-primary transition-colors">News & Promo</Link>
              <Link to="/moment" className="text-[15px] font-medium hover:text-brand-primary transition-colors">Choose Your Moment</Link>
              <Link to="/faq" className="text-[15px] font-medium hover:text-brand-primary transition-colors">FAQ</Link>
              <Link to="/about" className="text-[15px] font-medium hover:text-brand-primary transition-colors">About Us</Link>
            </nav>
          </div>

          {/* Right Action Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="text-brand-primary hover:opacity-80 transition-opacity">
              <Search size={22} strokeWidth={2.5} />
            </button>
            <div className="relative">
              <button 
                className="relative text-brand-primary hover:opacity-80 transition-opacity flex items-center"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <div className="relative">
                  {/* Shopping Cart Icon path mimicking generic cart or handbag */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  {totalQuantity > 0 && (
                    <span className="absolute -top-3 -right-3 bg-[#985827] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                      {totalQuantity}
                    </span>
                  )}
                </div>
              </button>

              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute top-[40px] right-0 w-[380px] bg-[#FEF4E8] shadow-xl border border-[#A67B5B]/30 z-50">
                  {/* Top row */}
                  <div className="flex justify-between items-center px-4 py-3 border-b border-[#A67B5B]/20">
                    <span className="text-[#50301B] font-semibold text-[14px]">Total : {totalQuantity} Pcs</span>
                    <Link to="/cart" onClick={() => setIsCartOpen(false)} className="text-[#985827] font-bold text-[13px] hover:text-[#50301B] transition-colors">Go to cart →</Link>
                  </div>
                  
                  {/* Items list */}
                  <div className="max-h-[300px] overflow-y-auto space-y-3 px-4 py-3">
                    {cartItems.map(item => (
                      <div key={item.id} className="flex items-center gap-3 bg-white/60 rounded p-2 border border-[#A67B5B]/10">
                        <img src={item.image} alt={item.name} className="w-[48px] h-[48px] object-cover rounded border border-[#A67B5B]/20" />
                        <div className="flex-1 min-w-0">
                           <span className="text-[#50301B] font-medium text-[12px] leading-snug line-clamp-2 block">{item.name}</span>
                           <span className="text-[#985827] text-[11px] font-semibold">Rp {formatPrice(item.price)}</span>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                           <span className="text-[#50301B] text-[12px] font-medium">x</span>
                           <input 
                             type="number" 
                             value={item.quantity} 
                             onChange={(e) => dispatch(cartActions.updateQuantity({id: item.id, quantity: parseInt(e.target.value) || 1}))}
                             className="w-[36px] h-[26px] border border-[#A67B5B]/40 text-center text-[#50301B] outline-none font-medium text-[12px] bg-white"
                             min="1"
                           />
                           <button onClick={() => dispatch(cartActions.removeFromCart(item.id))} className="text-[#A67B5B] hover:text-[#50301B] font-bold ml-1 text-[14px] transition-colors">×</button>
                        </div>
                      </div>
                    ))}
                    {cartItems.length === 0 && (
                      <div className="text-center py-6 text-[#A67B5B] text-sm">Cart is empty</div>
                    )}
                  </div>
                  
                  {/* Bottom row */}
                  <div className="flex justify-between items-center px-4 py-3 bg-[#FED8B1]/50 border-t border-[#A67B5B]/20">
                     <span className="text-[#50301B] font-black text-[15px]">Total <span className="text-[#985827]">Rp {formatPrice(totalAmount)}</span></span>
                     <Link 
                       to="/cart" 
                       onClick={() => setIsCartOpen(false)} 
                       className="group bg-[#985827] text-white font-bold py-2 px-5 text-[13px] hover:bg-[#50301B] transition-colors flex items-center gap-1"
                     >
                       Purchase now
                     </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/login" className="text-brand-primary hover:opacity-80 transition-opacity">
              <User size={22} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center space-x-5">
             <button className="relative text-brand-primary flex items-center">
              <ShoppingCart size={22} strokeWidth={2.5} />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-[6px] bg-yellow-400 text-brand-dark text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white shadow-lg absolute w-full border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/menu" className="block px-3 py-3 text-brand-dark font-medium border-b border-gray-50">Menu</Link>
            <Link to="/social" className="block px-3 py-3 text-brand-dark font-medium border-b border-gray-50">Social</Link>
            <Link to="/news-promo" className="block px-3 py-3 text-brand-dark font-medium border-b border-gray-50">News & Promo</Link>
            <Link to="/moment" className="block px-3 py-3 text-brand-dark font-medium border-b border-gray-50">Choose Your Moment</Link>
            <Link to="/faq" className="block px-3 py-3 text-brand-dark font-medium border-b border-gray-50">FAQ</Link>
            <Link to="/about" className="block px-3 py-3 text-brand-dark font-medium">About Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

