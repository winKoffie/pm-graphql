'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/queries';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p className="text-center text-lg font-medium">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error.message}</p>;

  return (
    <div className="flex justify-center w-full p-6">
      
      <div className="max-w-screen-3xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Projects</h1>

        <div className="flex flex-wrap justify-center gap-6">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
