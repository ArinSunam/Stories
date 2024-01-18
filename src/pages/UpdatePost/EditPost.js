import React from 'react'
import { useParams } from 'react-router'
import { useGetPostDetailQuery } from '../../features/BlogApi';
import EditForm from './EditForm';

const EditPost = () => {

  const { id } = useParams();
  console.log('updateId', id)
  const { isLoading, isError, error, data } = useGetPostDetailQuery(id);

  return (
    <>

      {data && <EditForm post={data} />}

    </>
  )
}

export default EditPost
