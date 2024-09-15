import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', { name, email, message });
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact bg-gray-50 min-h-screen py-10 px-4">
      <section className="w-full max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-center mb-12">
          We would love to hear from you! If you have any questions or feedback, please feel free to reach out to us using the form below or through our contact details.
        </p>
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit} className="bg-gray-800 text-white shadow-lg rounded-lg p-6 w-full max-w-lg">
            <label className="block mb-4">
              <span className="text-gray-300">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-300">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400"
                required
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-300">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400"
                rows="4"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 w-full"
            >
              Send Message
            </button>
            {status && <p className="mt-4 text-center text-lg">{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
