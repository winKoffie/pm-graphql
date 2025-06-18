import { FaEnvelope, FaPhone, FaIdBadge } from 'react-icons/fa';

const ClientInfo = ({ client }) => {
  if (!client) {
    return <p className="mt-5 text-gray-500">No client information available.</p>;
  }

  return (
    <>
      <h5 className="mt-5 text-lg font-semibold mb-3">Client Information</h5>
      <ul className="space-y-2">
        <li className="flex items-center bg-gray-100 px-4 py-2 rounded shadow">
          <FaIdBadge className="mr-2 text-blue-500" /> {client.name}
        </li>
        <li className="flex items-center bg-gray-100 px-4 py-2 rounded shadow">
          <FaEnvelope className="mr-2 text-blue-500" /> {client.email}
        </li>
        <li className="flex items-center bg-gray-100 px-4 py-2 rounded shadow">
          <FaPhone className="mr-2 text-blue-500" /> {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
