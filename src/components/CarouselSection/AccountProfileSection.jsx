import themeimage2 from '../../assets/New Images/ThemeImage22.png'

const AccountProfileSection = () => {
  return (
    <section className="py-16 px-4 mt-5 mb-5 bg-gradient-to-br from-[#d9d6f9] via-white to-[#d9d6f9] shadow-xl rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Build your personal Account Profile
              </h2>
              <p className="text-gray-600">
                Create a strong and engaging personal account profile to showcase your skills, experience, and
                qualifications.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                1. Upload your CV
              </h3>
              <p className="text-gray-600">
                Make a strong impression on potential employers by uploading your updated CV
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                1. Scheduling Interviews
              </h3>
              <p className="text-gray-600">
                We offer a user-friendly interview scheduling process that ensures a seamless experience for both employers and
                candidates.
              </p>
            </div>
          </div>

          {/* Right Image and UI Elements */}
          <div className="relative">
            {/* Purple Circle Background */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#a18eec] rounded-full"></div>
            </div>

            {/* Main Image */}
            <div className="relative z-10">
              <img
                src={themeimage2}
                alt="Person with headphones using laptop"
                className="w-full h-auto"
              />
            </div>

            {/* Profile Card */}
            <div className="absolute top-10 right-0 bg-white rounded-lg shadow-lg p-4 z-20 w-48">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden mb-2">
                  <svg className="w-full h-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a8 8 0 0 1 8 8H4a8 8 0 0 1 8-8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800">Sarah</h4>
                <p className="text-xs text-gray-500 mb-3">UI/UX Designer</p>
                <button className="bg-gray-800 text-white text-xs py-1 px-4 rounded-full">
                  Hire Me
                </button>
              </div>
            </div>

            {/* Interview Notification Card */}
            <div className="absolute bottom-32 left-0 bg-white rounded-lg shadow-lg p-4 z-20 w-64">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-[#a18eec] rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">New interview</h4>
                  <p className="text-xs text-gray-600">You have a new interview next week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountProfileSection;