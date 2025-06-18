import Link from "next/link";
import DeleteProjectButton from "./DeleteProjectButton";

const ProjectCard = ({ project }) => {
  return (
    <div className="">
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-300 flex flex-row justify-between items-start transition-shadow duration-300 hover:shadow-lg">
        {/* Left: Project info */}
        <div className="pr-4 flex-1">
          <h5 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h5>
          <p className="text-sm text-gray-500">
            Status: <span className="font-medium text-green-600">{project.status}</span>
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col items-end gap-2">
          <Link
            className="text-sm bg-blue-100 text-blue-700 px-4 py-1 rounded-lg hover:bg-blue-200 transition"
            href={`/projects/${project.id}`}
          >
            View
          </Link>
          <DeleteProjectButton projectId={project.id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
