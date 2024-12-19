import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_pyffx3q', 'template_35mz4yc', form.current, {
                publicKey: '68OBi16__a-QZKasA',
            })
            .then(
                () => {
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    alert('Failed to send message. Please try again later.');
                    console.error('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="relative flex items-center justify-center min-h-[700px] bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Section */}
              <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                  Get in touch:
                </h1>
                <p className="text-lg sm:text-xl font-medium text-gray-600 mt-2">
                  Fill in the form to start a conversation
                </p>
              </div>
      
              {/* Form Section */}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="p-6 flex flex-col bg-white rounded-lg shadow-md"
              >
                <div className="flex flex-col">
                  <label htmlFor="from_name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Full Name"
                    required
                    aria-label="Full Name"
                    className="mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-medium focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label htmlFor="user_email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="{from_name}"
                    placeholder="Email"
                    required
                    aria-label="Email"
                    className="mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-medium focus:border-orange-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label htmlFor="message" className="hidden">
                    Message
                  </label>
                  <textarea
                    name="{message}"
                    placeholder="Your Message"
                    required
                    aria-label="Message"
                    className="mt-2 py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-medium focus:border-orange-500 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
      
              {/* Contact Details and Map */}
              <div className="flex flex-col gap-4 px-6 py-4">
                <div className="text-gray-700 font-medium">
                  Address: Aadhya Enterprises Noorani Complex
                  <br />
                  Karwar, Uttar Kannada
                  <br />
                  Phone: 9876543210
                </div>
      
                <div className="relative bg-white rounded-lg shadow-md">
                  <iframe
                    width="100%"
                    height="250"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Aadhya%20enterprises%20karwar&zoom=10&maptype=roadmap"
                    style={{
                      border: 0,
                      position: "relative",
                      zIndex: 2,
                    }}
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}
