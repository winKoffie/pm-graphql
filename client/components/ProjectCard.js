const ProjectCard = ({ project }) => {
  return (
    <div className="">
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-300 h-32 flex flex-row justify-between items-start transition-shadow duration-300 hover:shadow-lg">
        <div className="pr-4">
          <h5 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h5>
          <p className="text-sm text-gray-500">
            Status: <span className="font-medium text-green-600">{project.status}</span>
          </p>
        </div>

        <a
          className=" text-gray-700 px-4 py-0.5  rounded-lg  transition self-start"
          href={`/projects/${project.id}`}
        >
          View
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
