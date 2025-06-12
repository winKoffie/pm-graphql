import { FaTrash } from 'react-icons/fa';
import { DELETE_CLIENT } from '../queries/queries';
import { useMutation } from '@apollo/client';
import { GET_CLIENTS } from '../queries/queries';

const ClientRow = ({ client, onDelete }) => {
    const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.filter(c => c.id !== deleteClient.id) },
      });
    }
   
    }) 
    
    return (
    <tr className="hover:bg-gray-50 text-sm bg-blue-50">
      <td className="border border-gray-200 px-3 py-2">{client.name}</td>
      <td className="border border-gray-200 px-3 py-2">{client.email}</td>
      <td className="border border-gray-200 px-3 py-2">{client.phone}</td>
      <td className="border border-gray-200 px-3 py-2 text-center">
        <button
          className="text-red-500 hover:text-red-700 transition"
          title={`Delete ${client.name}`}
          onClick={deleteClient}
        >
          <FaTrash className="inline-block text-sm" />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
