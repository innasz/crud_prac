import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useFetchDetails } from '../services/fetchDetails';
import { useDeletePost } from '../services/deletePost';

const Detail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetchDetails(postId);
  const { error: deleteError, mutateAsync } = useDeletePost();
  const deletePost = async () => {
    await mutateAsync(postId);
    navigate(-1);
  };

  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (error || deleteError) {
    return <h1>{error || deleteError}</h1>;
  }

  return (
    <div>
      {data.content}
      <button
        type='button'
        onClick={deletePost}
        class='bg-red-700 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Delete
      </button>
    </div>
  );
};

export default Detail;
