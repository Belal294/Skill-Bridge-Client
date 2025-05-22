import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

const ContactPage = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_tedkcpv",        // Service ID
        "template_zigxkmb",       // Template ID
        formRef.current,
        "wBO8d0CXFOXOHd6bJ"       // Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setSending(false);
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Toaster Container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">We're Here to Help You</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We always want to hear from you! Let us know how we can best help
          you and we'll do our very best.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Google Map */}
        <div className="md:w-1/2 h-96 bg-gray-200 rounded-md relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
          <div className="absolute top-2 right-2 flex space-x-1">
            <button className="bg-white p-1 rounded shadow">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button className="bg-white p-1 rounded shadow">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Full name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us how we can help"
              rows={6}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded transition duration-200"
            >
              {sending ? "Sending..." : "Send Your Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
        {/* Address */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600">1234 Main Street, N. Google<br />Suite #100</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
          <p className="text-gray-600">Monday - Friday<br />9:00 - 17:00</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Mail Us</h3>
          <p className="text-gray-600">Support: help@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
