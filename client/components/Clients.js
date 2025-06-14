'use client';

import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/queries';
import { useState } from 'react';
import AddClientModal from './AddClientModel';

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    console.log('Delete client with ID:', id);
  };

  const handleAddClient = (clientData) => {
    console.log('New client data:', clientData);
    setShowModal(false);
    // Add mutation logic here
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="mt-6 overflow-x-auto relative">
      <button
        type="button"
        className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-500 mb-4"
        onClick={() => setShowModal(true)}
      >
        Add Client
      </button>

      {showModal && (
        <AddClientModal
          onClose={() => setShowModal(false)} 
          onSubmit={handleAddClient} 
        />
      )}

      <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.clients.map((client) => (
            <ClientRow key={client.id} client={client} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
