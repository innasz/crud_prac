import { useQuery } from '@tanstack/react-query';
import baseApi from './api';

const fetchPosts = async () => {
  const response = await baseApi.get('/');
  return response.data.data;
};

const useFetchPosts = () =>
  useQuery(['posts'], () => fetchPosts(), {
    keepPreviousData: true,
  });

export { useFetchPosts };
