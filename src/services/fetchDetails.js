import React from 'react';
import baseApi from './api';
import { useQuery } from '@tanstack/react-query';

const fetchDetails = async (id) => {
  const result = await baseApi.get(`/${id}`);
  return result.data.data;
};

const useFetchDetails = (id) => useQuery(['post', id], () => fetchDetails(id));

export { useFetchDetails };
