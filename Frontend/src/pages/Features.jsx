import React from 'react';

const Features = () => {
  return (
    <div className="features bg-gray-50 min-h-screen py-10 px-4">
      <section className="w-full max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center h-auto flex flex-col justify-between">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2362/2362052.png"
              alt="Easy Management"
              className="mx-auto mb-4 h-24 w-24"
            />
            <h2 className="text-2xl font-semibold mb-2">Easy Management</h2>
            <p className="text-gray-600 text-base mb-4">
              Easily manage all your subscriptions from a single dashboard. Track your usage, adjust plans, and get a clear overview of your financial commitments. The intuitive interface ensures that you can find and control everything effortlessly.
            </p>
            <p className="text-gray-600 text-base">
              Organize your subscriptions by categories and set preferences for notifications and payment methods. Stay in control of your financial commitments like never before.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center h-auto flex flex-col justify-between">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/633/173/non_2x/clock-icon-symbol-sign-vector.jpg"
              alt="Payment Reminders"
              className="mx-auto mb-4 h-24 w-24"
            />
            <h2 className="text-2xl font-semibold mb-2">Payment Reminders</h2>
            <p className="text-gray-600 text-base mb-4">
              Receive timely reminders to avoid missing any payments. Customize notifications for different services to stay on top of your expenses. The reminders are designed to fit your schedule and avoid overwhelming you with unnecessary alerts.
            </p>
            <p className="text-gray-600 text-base">
              Set up reminders via email, push notifications, or SMS. Adjust the frequency and timing according to your preferences to make sure you never miss a payment.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center h-auto flex flex-col justify-between">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1822/1822140.png"
              alt="Detailed Analytics"
              className="mx-auto mb-4 h-24 w-24"
            />
            <h2 className="text-2xl font-semibold mb-2">Detailed Analytics</h2>
            <p className="text-gray-600 text-base mb-4">
              Get detailed insights into your subscription spending and usage. Visualize your expenses through interactive charts and graphs, and analyze trends over time to make informed financial decisions.
            </p>
            <p className="text-gray-600 text-base">
              Break down your spending by category, service, and time period. Compare your actual spending against your budget to optimize your subscription management and save money.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center h-auto flex flex-col justify-between">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4149/4149694.png"
              alt="Subscription Insights"
              className="mx-auto mb-4 h-24 w-24"
            />
            <h2 className="text-2xl font-semibold mb-2">Subscription Insights</h2>
            <p className="text-gray-600 text-base mb-4">
              Gain valuable insights into your subscription habits and discover areas where you can cut costs. Our analytics engine provides actionable recommendations based on your usage patterns.
            </p>
            <p className="text-gray-600 text-base">
              Understand your spending habits and optimize your subscriptions. Discover unused or underused services and make adjustments to better align with your needs and budget.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center h-auto flex flex-col justify-between">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9872/9872460.png"
              alt="Multi-Platform Support"
              className="mx-auto mb-4 h-24 w-24"
            />
            <h2 className="text-2xl font-semibold mb-2">Multi-Platform Support</h2>
            <p className="text-gray-600 text-base mb-4">
              Access and manage your subscriptions from multiple platforms. Whether you’re on your smartphone, tablet, or computer, our app ensures a seamless experience across all devices.
            </p>
            <p className="text-gray-600 text-base">
              Synchronize your data across devices and stay up to date with your subscription management no matter where you are. Enjoy a consistent user experience and access your information anytime.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center h-auto flex flex-col justify-between">
            <img
              src="https://thumbs.dreamstime.com/b/notification-bell-outline-icon-notification-bell-outline-icon-linear-style-sign-mobile-concept-web-design-one-new-120268778.jpg"
              alt="Customizable Alerts"
              className="mx-auto mb-4 h-24 w-24"
            />
            <h2 className="text-2xl font-semibold mb-2">Customizable Alerts</h2>
            <p className="text-gray-600 text-base mb-4">
              Tailor alerts and notifications according to your preferences. Choose how and when you want to be alerted about important subscription updates and payment deadlines.
            </p>
            <p className="text-gray-600 text-base">
              Configure alert settings for different scenarios, such as upcoming renewals or changes in subscription terms. Stay informed and in control with customized notifications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
