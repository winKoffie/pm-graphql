import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-5xl w-full">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg mb-10 text-center">
          <h1 className="text-4xl font-bold mb-3">About the Project</h1>
          <p className="text-lg opacity-90">
            A modern Client Management System built with React, Apollo Client & GraphQL. Manage your clients with ease while learning full-stack GraphQL integration.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">GraphQL API Integration</h3>
              <p className="text-gray-600">
                Fetch data efficiently with GraphQL queries and mutations using Apollo Client.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">CRUD Operations</h3>
              <p className="text-gray-600">
                Full create, read, update, and delete functionality for managing clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Real-Time Cache Updates</h3>
              <p className="text-gray-600">
                Automatic UI updates after mutations using Apollo Client cache management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Modern React</h3>
              <p className="text-gray-600">
                Built using functional components, React Hooks, and clean state management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Tailwind CSS</h3>
              <p className="text-gray-600">
                Fully responsive, mobile-friendly, and styled using Tailwind for a modern UI.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2 text-blue-600">Scalable Architecture</h3>
              <p className="text-gray-600">
                Easily extendable architecture ready for real-world production apps.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border text-center text-gray-700">
          <p>Created as a full-stack learning project to master GraphQL and modern React development.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
