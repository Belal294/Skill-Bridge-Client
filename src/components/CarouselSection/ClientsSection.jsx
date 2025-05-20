import React from "react";

const ClientsSection = () => {
  return (
    <section className="py-16 px-4 mt-5 mb-5 bg-gradient-to-br from-[#d9d6f9] via-white to-[#d9d6f9] shadow-xl rounded-2xl">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center text-[#1a1a5c] mb-20">
          Clients we have worked with
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-20 md:gap-32 mb-20 text-lg">
          {/* Microsoft Logo */}
          <div className="flex items-center text-2xl animate-float scale-in hover:rotate-3 hover:scale-105 transition-all duration-500">
            <div className="w-10 h-10 grid grid-cols-2 gap-1.5">
              <div className="bg-[#7b83eb]"></div>
              <div className="bg-[#7b83eb]"></div>
              <div className="bg-[#7b83eb]"></div>
              <div className="bg-[#7b83eb]"></div>
            </div>
            <span className="ml-4 text-[#7b83eb] font-semibold">Microsoft</span>
          </div>

          {/* Adobe Logo */}
          <div className="flex items-center text-2xl animate-float scale-in hover:rotate-3 hover:scale-105 transition-all duration-500">
            <svg className="w-10 h-10 text-[#7b83eb]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425h-3.71zM19.319 0H4.681C2.096 0 0 2.095 0 4.681v14.638C0 21.905 2.096 24 4.681 24h14.638c2.586 0 4.681-2.095 4.681-4.681V4.681C24 2.095 21.904 0 19.319 0z" />
            </svg>
            <span className="ml-4 text-[#7b83eb] font-semibold">Adobe</span>
          </div>

          {/* Google Logo */}
          <div className="flex items-center text-2xl animate-float scale-in hover:rotate-3 hover:scale-105 transition-all duration-500">
            <svg className="w-10 h-10" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M24 9.5c3.9 0 6.8 1.6 8.3 2.9l6.1-5.9C34.6 3.3 29.7 1 24 1 14.7 1 6.9 6.4 3.4 14.2l7.1 5.5C12.2 13.1 17.6 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.5 24.5c0-1.7-.2-3.4-.5-5H24v9.5h12.7c-.6 3.3-2.5 6-5.4 7.9l8.3 6.4c4.9-4.5 7.7-11.1 7.7-18.8z"/>
              <path fill="#FBBC05" d="M10.5 28.3c-1.3-3.9-1.3-8 0-11.7l-7.1-5.5C.7 15.3 0 19.6 0 24s.7 8.7 3.4 12.9l7.1-5.6z"/>
              <path fill="#EA4335" d="M24 47c5.7 0 10.6-1.9 14.1-5.1l-8.3-6.4c-2.3 1.5-5.2 2.3-8.3 2.3-6.3 0-11.7-3.6-14.2-8.8l-7.1 5.6C6.9 41.6 14.7 47 24 47z"/>
            </svg>
            <span className="ml-4 text-[#7b83eb] font-semibold">Google</span>
          </div>

          {/* Airbnb Logo */}
          <div className="flex items-center text-2xl animate-float scale-in hover:rotate-3 hover:scale-105 transition-all duration-500">
            <svg className="w-10 h-10 text-[#7b83eb]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a3 3 0 100 6 3 3 0 000-6zm0 8c-2.415 0-4.53 1.27-5.729 3.176A7.973 7.973 0 0012 19c2.21 0 4.22-.895 5.68-2.343A6.965 6.965 0 0012 13z" />
            </svg>
            <span className="ml-4 text-[#7b83eb] font-semibold">Airbnb</span>
          </div>

          {/* Upwork Logo */}
          <div className="flex items-center text-2xl animate-float scale-in hover:rotate-3 hover:scale-105 transition-all duration-500">
            <svg className="w-10 h-10" viewBox="0 0 512 512" fill="#7b83eb">
              <path d="M426.4 180.6c-25.3 0-45.9 15.6-54.3 37.3-8.2-10.6-15.4-22.1-21.4-34-7.8-15.2-14.5-30.9-20.2-47.3h-59.6v98.5c-5.3 7.9-11 15.6-17 23.1-24.8-30.1-44.4-70.2-54.5-110.5h-60.1c14.1 70.5 52.5 136.3 98.1 181.6-6.6 7.3-13.3 14.4-20 21.1-36.4-37.4-65.7-88.2-79.7-142.7h-57.4c21.5 88.2 73.2 162.1 135.4 213.3 6.4 5.3 13 10.3 19.7 15 4.6 3.2 10.2 4.9 15.9 4.9s11.3-1.7 15.9-4.9c6.7-4.6 13.3-9.7 19.7-15 36.3-30.2 68.6-66.8 93.2-107.5 3.2 1.7 6.6 3 10.1 4 5.5 1.5 11.1 2.2 16.7 2.2 34.6 0 62.7-28.1 62.7-62.7.1-34.6-28-62.7-62.6-62.7z"/>
            </svg>
            <span className="ml-4 text-[#7b83eb] font-semibold">Upwork</span>
          </div>
        </div>

        <div className="border-t border-gray-200 w-1/2 mx-auto"></div>
      </div>
    </section>
  );
};

export default ClientsSection;
