import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import SocialPage from "./pages/SocialPage";
import NewsPromoPage from "./pages/NewsPromoPage";
import MomentPage from "./pages/MomentPage";
import FaqPage from "./pages/FaqPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/news-promo" element={<NewsPromoPage />} />
          <Route path="/moment" element={<MomentPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>

      {/* Footer strictly mimicking brand-darkery red footer */}
      <footer className="bg-brand-primary text-white py-12 mt-auto">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Customer Care</h3>
            <ul className="space-y-2 text-[15px] opacity-90">
              <li className="hover:opacity-100 cursor-pointer">
                Panduan Pemesanan
              </li>
              <li className="hover:opacity-100 cursor-pointer">
                Syarat & Ketentuan
              </li>
              <li className="hover:opacity-100 cursor-pointer">Kontak Kami</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase">Informasi Lain</h4>
            <ul className="space-y-2 text-[15px] opacity-90">
              <li className="hover:opacity-100 cursor-pointer">Karir</li>
              <li className="hover:opacity-100 cursor-pointer">Tentang Kami</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase">
              Metode Pembayaran
            </h4>
            <div className="flex gap-2 flex-wrap text-sm">
              <div className="px-3 py-1 bg-white text-brand-primary rounded text-xs font-bold">
                BCA
              </div>
              <div className="px-3 py-1 bg-white text-brand-primary rounded text-xs font-bold">
                MANDIRI
              </div>
              <div className="px-3 py-1 bg-white text-brand-primary rounded text-xs font-bold">
                GOPAY
              </div>
              <div className="px-3 py-1 bg-white text-brand-primary rounded text-xs font-bold">
                OVO
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4 uppercase">
              D'Bakery Purwokerto
            </h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center cursor-pointer hover:bg-white hover:text-brand-primary transition-colors text-sm font-bold">
                FB
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center cursor-pointer hover:bg-white hover:text-brand-primary transition-colors text-sm font-bold">
                IG
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center cursor-pointer hover:bg-white hover:text-brand-primary transition-colors text-sm font-bold">
                TW
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 mt-12 pt-6 border-t border-brand-light">
          <p className="text-[13px] opacity-80">
            © 2026 IE. (D'Bakery Purwokerto by Bunga's Cake). All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
