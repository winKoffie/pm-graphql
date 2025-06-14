import { FaTrash } from 'react-icons/fa';
import { DELETE_CLIENT} from '../queries/queries';
import { useMutation } from '@apollo/client';

const ClientRow = ({ client }) => {
  // Setup the deleteClient mutation
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id }, // Pass the client ID as a variable to the mutation

    // Update function: modify Apollo cache after mutation succeeds
    update(cache, { data: { deleteClient } }) {
      // Modify only the 'clients' field in Apollo's normalized cache
      cache.modify({
        fields: {
          clients(existingClientRefs = [], { readField }) {
            // Filter out the deleted client from the cache by its ID
            return existingClientRefs.filter(
              clientRef => readField('id', clientRef) !== deleteClient.id
            );
          },
        },
      });
    },
  });

  return (
    <tr className="hover:bg-gray-50 text-sm bg-blue-50">
      <td className="border border-gray-200 px-3 py-2">{client.name}</td>
      <td className="border border-gray-200 px-3 py-2">{client.email}</td>
      <td className="border border-gray-200 px-3 py-2">{client.phone}</td>
      <td className="border border-gray-200 px-3 py-2 text-center">
        <button
          className="text-red-500 hover:text-red-700 transition"
          title={`Delete ${client.name}`}
          onClick={deleteClient} // Call the deleteClient mutation on click
        >
          <FaTrash className="inline-block text-sm" />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
