'use client';

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CLIENT, GET_CLIENTS } from '../queries/queries';

const AddClientForm = ({ onSubmit }) => {
  // Form state to store user input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Apollo useMutation hook to add a new client
  const [addClient] = useMutation(ADD_CLIENT, {
    // Variables automatically passed to the mutation
    variables: { name, email, phone },

    // Apollo cache update function after mutation completes
    update(cache, { data: { addClient } }) {
      // Read existing clients from Apollo cache
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      // Write updated clients list back to Apollo cache
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] }, // Append the new client
      });
    },
  });

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic form validation
    if (!name || !email || !phone) {
      alert('All fields are required');
      return;
    }

    // Call mutation function to add the client
    // ⚠️ NOTE: you don't need to pass arguments here, variables are already bound
    addClient();

    // Clear form fields after submission
    setName('');
    setEmail('');
    setPhone('');

    // Optional callback to parent component (if provided)
    if (onSubmit) {
      onSubmit({ name, email, phone });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="text-end">
        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddClientForm;
