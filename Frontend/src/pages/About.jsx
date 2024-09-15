import React from 'react';

const About = () => {
  return (
    <div className="about bg-gray-50 min-h-screen py-10 px-4">
      <section className="w-full max-w-7xl mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="text-lg mb-8">
          Welcome to Subscription Manager! We are dedicated to helping you manage all your subscriptions efficiently and effortlessly. Our team of passionate professionals is committed to delivering the best user experience.
        </p>
        <p className="text-lg mb-8">
          Founded in 2023, Subscription Manager was created to simplify the complex world of subscription services. Our mission is to provide a seamless platform where users can easily track, manage, and optimize their subscriptions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150" // Replace with your image
              alt="Team Member"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150" // Replace with your image
              alt="Team Member"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/150" // Replace with your image
              alt="Team Member"
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
            <p className="text-gray-600">Head of Design</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
