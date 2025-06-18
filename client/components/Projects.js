'use client';

import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/queries';
import ProjectCard from './ProjectCard';
import AddProjectModal from './AddProjectModel';

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return <p className="text-center text-lg font-medium">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error.message}</p>;

  return (
    <div className="flex flex-col justify-center items-center w-full p-6">
      <div className="max-w-screen-3xl w-full">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Projects</h1>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Add Project
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && <AddProjectModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Projects;
