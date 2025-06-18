import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT, GET_PROJECTS } from '@/queries/queries';

const DeleteProjectButton = ({ projectId }) => {

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const handleDelete = () => deleteProject();

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={handleDelete}>
        <FaTrash className='icon' color='red' />
      </button>
    </div>
  );
};

export default DeleteProjectButton;
