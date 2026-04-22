import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item opened by default like in screenshot

  const faqs = [
    {
      question: 'Halal',
      answer: 'd\'Bakery telah mendapatkan Sertifikat Halal dari LPPOM MUI Pusat dengan no. 00160083100517 yang berlaku di seluruh outlet d\'Bakery secara Nasional dengan status SJH "A" (Excellent) selama 2 kali periode audit secara berturut-turut.'
    },
    {
      question: 'Cara Order',
      answer: 'Pilih produk yang Anda inginkan, masukkan ke dalam keranjang, dan ikuti instruksi pembayaran pada halaman kasir. Anda bisa memesan melalui Website, Aplikasi, maupun Call Center.'
    },
    {
      question: 'Cara Registrasi',
      answer: 'Klik menu daftar/login di pojok kanan atas, lalu masukkan nomor telepon atau email aktif. Anda akan menerima kode OTP untuk memverifikasi akun Anda.'
    },
    {
      question: 'Tarif Pengiriman GoSend Instant',
      answer: 'Tarif pengiriman melalui GoSend Instant dihitung berdasarkan jarak (kilometer) dari outlet d\'Bakery terdekat ke lokasi tujuan pengiriman Anda. Estimasi biaya akan otomatis tampil saat checkout.'
    },
    {
      question: 'Metode Pembayaran',
      answer: 'Kami menerima pembayaran melalui transfer Bank (Virtual Account), e-Wallet (OVO, GoPay, ShopeePay, Dana), dan Kartu Kredit/Debit berlogo Visa dan Mastercard.'
    },
    {
      question: 'Apakah user dapat registrasi lebih dari 1 akun dengan email dan no telepon yang sama?',
      answer: 'Satu alamat email dan satu nomor telepon hanya dapat diregistrasikan untuk 1 pengguna (akun) d\'Bakery guna menjaga keamanan transaksi dan distribusi promo.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Page Title & Breadcrumb */}
        <div className="mb-12">
          <h1 className="text-[26px] font-medium text-brand-primary tracking-wide mb-1 font-sans">Frequently Asked Question</h1>
          <div className="text-[12px] text-gray-800 font-medium flex gap-2">
             <Link to="/" className="cursor-pointer hover:text-brand-primary">Home</Link> 
             <span>/</span> 
             <span>Frequently Asked Question</span>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-7xl">
          <div className="flex flex-col border border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="flex flex-col">
                  {/* Question Box */}
                  <button
                    onClick={() => handleToggle(index)}
                    className={`w-full text-left px-5 py-5 border-b border-gray-200 transition-colors focus:outline-none ${
                        isOpen ? 'bg-[#FCEDD9]' : 'bg-[#FCEDD9] hover:bg-[#F8E1C7]'
                      }`}
                  >
                    <span className="text-[15px] font-medium text-brand-dark">
                      {faq.question}
                    </span>
                  </button>

                  {/* Answer Box */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] border-b border-gray-200' : 'max-h-0'
                    }`}
                  >
                    <div className="px-5 py-5 bg-white">
                      <p className="text-[14px] text-brand-dark leading-relaxed font-sans">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FaqPage;
