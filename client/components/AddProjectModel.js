'use client';

import React, { useEffect } from 'react';
import AddProjectForm from './AddProjectForm';

const AddProjectModal = ({ onClose, onSubmit }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
      <div className="relative bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Add New Project</h2>
        <AddProjectForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddProjectModal;
