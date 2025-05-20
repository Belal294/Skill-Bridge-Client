import img from '../assets/carosel/banner-image-bg.jpg';
import Footer from './Footer';

const ContactForm = () => {
  return (
    <div className="w-full m-0 p-0">
      {/* Contact Form Section */}
      <div className="w-full min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 m-0">
        <div className="max-w-5xl mx-auto shadow-lg border border-emerald-100 rounded-lg overflow-hidden">
          {/* Banner/Header */}
          <div
            className="p-6 sm:p-10 bg-cover bg-center text-center sm:text-left"
            style={{
              backgroundImage: `url(${img})`,
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-600">Get in Touch</h2>
            <p className="text-sm sm:text-md mt-2 text-teal-600">
              We'd love to hear from you. Fill out the form below.
            </p>
          </div>

          {/* Form */}
          <form
            action="/contact/submit"
            method="POST"
            className="p-6 sm:p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            <div className="col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-emerald-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-300 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-emerald-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-300 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full border border-emerald-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-300 focus:outline-none"
                placeholder="What is this regarding?"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full border border-emerald-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-300 focus:outline-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="col-span-1 md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ContactForm;
