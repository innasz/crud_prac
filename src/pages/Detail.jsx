import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useFetchDetails } from '../services/fetchDetails';

const Detail = () => {
  const { postId } = useParams();
  const { data, isLoading, error } = useFetchDetails(postId);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return <div>{data.content}</div>;
};

export default Detail;
