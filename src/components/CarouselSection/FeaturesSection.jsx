import React from "react";

const FeaturesSection = () => {
  return (
<section className="py-16 px-4 mt-5 mb-5 bg-gradient-to-br from-[#d9d6f9] via-white to-[#d9d6f9] shadow-xl rounded-2xl">
      {/* Feature 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#e6e1ff] p-6 rounded-xl shadow-lg max-w-md mx-auto w-full">
          <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-700">Complete Onboarding</h4>
                <p className="text-xs text-gray-500">50% completed</p>
              </div>
              <button className="text-indigo-500 text-sm font-medium">Resume</button>
            </div>
            <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-1/2 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-3 pt-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://i.pravatar.cc/40?img=1"
                alt="Avatar"
              />
              <div className="text-sm font-medium text-gray-700">John Smith</div>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left max-w-md mx-auto">
          <div className="text-xs text-indigo-600 font-medium mb-2">OUR EXPERT TEAM</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
            Creativ<br />
            Takes care of<br />
            <span className="text-indigo-600">Onboarding</span>
          </h2>
          <p className="text-gray-600 text-sm">
            We provide a seamless onboarding experience, guiding you through every step of the process. Our platform ensures that new users feel welcomed and supported from day one.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left max-w-md mx-auto order-2 md:order-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
            Explore a World of<br />
            Freelance Opportunities
          </h2>
          <p className="text-gray-600 text-sm">
            Discover thousands of projects across various industries and skill sets. Whether you're a designer, developer, or writer, there's something for everyone.
          </p>
        </div>
        <div className="bg-[#d7f9f0] p-6 rounded-xl shadow-lg max-w-md mx-auto w-full order-1 md:order-2">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-center">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Freelance Gigs</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>🔧 Web Development</li>
                <li>✏️ Content Writing</li>
                <li>🎨 Graphic Design</li>
                <li>📊 Marketing Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#ffe6e6] p-6 rounded-xl shadow-lg max-w-md mx-auto w-full">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-center">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Quick Client Matching</h4>
              <p className="text-sm text-gray-600">Get matched with potential clients based on your profile and skills in minutes.</p>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
            Smart Matching<br />
            with <span className="text-rose-500">Clients</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Our AI-driven algorithm instantly connects freelancers with clients looking for their specific talents, helping reduce downtime and boost earnings.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left max-w-md mx-auto order-2 md:order-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-snug">
            Transparent<br />
            Payments & Reports
          </h2>
          <p className="text-gray-600 text-sm">
            Get paid securely and on time. Track your work history and generate financial reports with ease.
          </p>
        </div>
        <div className="bg-[#e6f0ff] p-6 rounded-xl shadow-lg max-w-md mx-auto w-full order-1 md:order-2">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-center">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Earnings Overview</h4>
              <p className="text-2xl font-bold text-green-600">$3,250</p>
              <p className="text-sm text-gray-600">This Month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
