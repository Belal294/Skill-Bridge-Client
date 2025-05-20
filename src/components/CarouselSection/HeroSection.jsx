// components/HeroSection.jsx
import themeimage from '../../assets/New Images/ThemeImage.png';
const HeroSection = () => {
  return (
    <main className="min-h-screen flex items-center container mx-auto px-4 py-6">
    <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Find Freelance Jobs{" "}
            <span className="relative">
              that you'll actually love
              <svg
                className="absolute -bottom-2 w-full"
                height="15"
                viewBox="0 0 400 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 13C47.6667 5.66667 162.8 -4.2 398 13"
                  stroke="#9F7AEA"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Join a network of over 40,000 freelancers that are finding work they love and making a great living
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full max-w-xs"
            />
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-r-full hover:bg-indigo-700 transition-colors">
              Start Free
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src={themeimage}
            alt="Freelancer with laptop"
            className="object-contain w-full h-auto relative z-10"
          />

          {/* Finance */}
          <div className="absolute top-1/4 left-0 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-20">
            <div className="w-6 h-6 bg-indigo-100 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <rect width="20" height="14" x="2" y="5" rx="2" stroke="currentColor" strokeWidth="2" />
                <line x1="2" x2="22" y1="10" y2="10" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="font-medium">Finance</span>
          </div>

          {/* Payroll */}
          <div className="absolute top-1/2 left-10 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-20">
            <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <rect width="20" height="14" x="2" y="5" rx="2" stroke="currentColor" strokeWidth="2" />
                <line x1="2" x2="22" y1="10" y2="10" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="font-medium">Payroll</span>
          </div>

          {/* Date Card */}
          <div className="absolute bottom-1/3 left-0 bg-white p-3 rounded-lg shadow-lg flex items-center gap-2 z-20">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-medium">July, 2023</span>
            <span className="font-bold text-indigo-600">$1,065.00</span>
          </div>

          {/* Profile */}
          <div className="absolute top-10 right-0 bg-white p-3 rounded-lg shadow-lg flex items-center gap-3 z-20">
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
              <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a8 8 0 0 1 8 8H4a8 8 0 0 1 8-8z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-sm">Emmanuel Adler</p>
              <p className="text-xs text-gray-500">Product designer</p>
            </div>
          </div>

          {/* Onboard */}
          <div className="absolute bottom-20 right-0 bg-white p-3 rounded-lg shadow-lg z-20 w-48">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" />
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-medium text-sm">Onboard</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-200 rounded-full w-full"></div>
              <div className="h-2 bg-gray-200 rounded-full w-full"></div>
              <div className="h-2 bg-gray-200 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
