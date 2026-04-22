import React from 'react';

const LoginPage = () => {
  return (
    <div className="bg-white min-h-screen pb-20 pt-10 border-b-[8px] border-brand-primary">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column: Login */}
          <div className="flex flex-col">
            <h1 className="text-[28px] text-brand-primary mb-1">Login</h1>
            <p className="text-[13px] text-gray-700 italic mb-4">
              (please input full digit of your phone,ex : 8910xxxxxxxx)
            </p>
            
            <div className="flex border border-gray-300 bg-gray-50 h-[38px] w-full max-w-[400px]">
              <div className="flex items-center px-3 border-r border-gray-300 text-[14px]">
                <span className="mr-1">🇮🇩</span> +62 <span className="ml-[2px] text-[10px]">▼</span>
              </div>
              <input 
                type="text" 
                placeholder="Phone number" 
                className="flex-1 px-3 outline-none text-[14px] bg-white"
              />
            </div>
            
            <button className="bg-[#e45a40] hover:bg-brand-primary transition-colors text-white font-medium text-[13px] px-6 py-[8px] mt-4 self-start w-[80px]">
              Login
            </button>
            
            <div className="relative flex items-center mt-6 mb-5 max-w-[300px]">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink-0 mx-3 text-gray-400 text-[12px] italic">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            <div className="flex flex-col space-y-[6px]">
              <button className="bg-[#e69138] hover:bg-[#d5822e] transition-colors text-white text-[13px] font-medium h-[36px] flex items-center w-[230px]">
                <div className="w-[36px] h-full flex items-center justify-center border-r border-white/20">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </div>
                <span className="flex-1 text-center">Login with E-mail & Password</span>
              </button>
              
              <button className="bg-[#dd4b39] hover:bg-[#c23321] transition-colors text-white text-[13px] font-medium h-[36px] flex items-center w-[180px]">
                <div className="w-[36px] h-full flex items-center justify-center border-r border-white/20 text-[18px] font-bold font-serif">
                  g
                </div>
                <span className="flex-1 text-center">Sign in with Google</span>
              </button>
            </div>
          </div>
          
          {/* Right Column: Registration */}
          <div className="flex flex-col">
            <h1 className="text-[28px] text-brand-primary mb-1">Registration</h1>
            <p className="text-[13px] text-gray-700 italic mb-4">
              (please input full digit of your phone,ex : 8910xxxxxxxx)
            </p>
            
            <div className="flex border border-gray-300 bg-gray-50 h-[38px] w-full max-w-[400px] mb-4">
              <div className="flex items-center px-3 border-r border-gray-300 text-[14px]">
                <span className="mr-1">🇮🇩</span> +62 <span className="ml-[2px] text-[10px]">▼</span>
              </div>
              <input 
                type="text" 
                placeholder="Phone number" 
                className="flex-1 px-3 outline-none text-[14px] bg-white"
              />
            </div>
            
            <div className="mb-4 max-w-[400px]">
              <label className="block text-[13px] font-bold text-gray-800 mb-1">Name*</label>
              <input 
                type="text" 
                placeholder="Enter Name" 
                className="w-full h-[38px] border border-gray-300 px-3 outline-none text-[14px]"
              />
            </div>
            
            <div className="flex items-start gap-2 max-w-[400px] mb-4">
              <input type="checkbox" className="mt-1" />
              <p className="text-[12px] text-gray-800">
                I accept the <a href="#" className="text-brand-primary italic hover:underline">Terms of Use</a> & <a href="#" className="text-brand-primary italic hover:underline">Privacy Policy</a>
              </p>
            </div>
            
            <button className="bg-[#f08574] text-white font-medium text-[13px] px-6 py-[8px] self-start w-[80px]">
              Submit
            </button>
            
            <div className="relative flex items-center mt-6 mb-5 max-w-[300px]">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink-0 mx-3 text-gray-400 text-[12px] italic">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            <button className="bg-[#e69138] hover:bg-[#d5822e] transition-colors text-white text-[13px] font-medium h-[36px] flex items-center w-[250px]">
              <div className="w-[36px] h-full flex items-center justify-center border-r border-white/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              </div>
              <span className="flex-1 text-center">Register with E-mail & Password</span>
            </button>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
