'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Spinner from '@/components/Spinner';
import ClientInfo from '@/components/ClientInfo';

import { GET_PROJECT } from '@/queries/queries';

const Project = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong</p>;

  return (
    <div className='mx-auto w-3/4 bg-white shadow rounded p-5'>
      <Link href='/' className='btn btn-light btn-sm w-1/25 py-1 rounded-lg px-2 ms-auto mb-3 flex justify-right items-right bg-blue-100 text-sm'>
        Back
      </Link>

      <h1 className='text-2xl font-semibold'>{data.project.name}</h1>
      <p className='mt-2'>{data.project.description}</p>

      <h5 className='mt-4 font-semibold'>Project Status</h5>
      <p className='text-lg'>{data.project.status}</p>

      <ClientInfo client={data.project.client} />
     
    </div>
  );
};

export default Project;
