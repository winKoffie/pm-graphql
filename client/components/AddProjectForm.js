'use client';

import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_PROJECT, GET_CLIENTS, GET_PROJECTS } from '@/queries/queries';

const AddProjectForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientId, setClientId] = useState('');
  const [status, setStatus] = useState('NEW');  // Use enum values directly

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const [addProject, { loading: mutationLoading, error: mutationError }] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      const existingProjects = cache.readQuery({ query: GET_PROJECTS });

      if (existingProjects?.projects) {
        cache.writeQuery({
          query: GET_PROJECTS,
          data: { projects: [...existingProjects.projects, addProject] },
        });
      }
    },
    onError: (err) => {
      console.error('Mutation Error:', err);
    },
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !status || !clientId) {
      alert('All fields are required');
      return;
    }

    try {
      await addProject({
        variables: { name, description, clientId, status }
      });

      setName('');
      setDescription('');
      setStatus('NEW');
      setClientId('');

      if (onSubmit) {
        onSubmit({ name, description, status, clientId });
      }
    } catch (err) {
      console.error('ApolloError:', err);
    }
  };

  if (loading) return <p>Loading clients...</p>;
  if (error) return <p>Failed to load clients: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Project Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="NEW">Not Started</option>
          <option value="PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Client</label>
        <select
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Client</option>
          {data?.clients?.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
      </div>

      <div className="text-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          disabled={mutationLoading}
        >
          {mutationLoading ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {mutationError && (
        <p className="text-red-500 text-sm">Error adding project: {mutationError.message}</p>
      )}
    </form>
  );
};

export default AddProjectForm;
