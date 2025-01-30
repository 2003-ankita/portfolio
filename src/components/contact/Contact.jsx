import React from "react";

export default function Contact() {
  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div className="py-8 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-8 text-3xl sm:text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>

        <div className="w-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg p-6 sm:p-8">
          <form action="#" className="space-y-6 sm:space-y-8">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-lg sm:text-xl font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-3"
                placeholder="Enter Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg sm:text-xl font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-3"
                placeholder="Enter Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-lg sm:text-xl font-medium text-white"
              >
                Message
              </label>
              <textarea
                rows="5"
                id="message"
                className="w-full shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-3"
                placeholder="Leave a comment ..."
                required
              />
            </div>

            {/* Send Message Button */}
            <button className="w-full sm:w-auto inline-flex justify-center text-white bg-orange-500 border-0 py-3 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
