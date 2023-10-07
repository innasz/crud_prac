import React from 'react';
import baseApi from './api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deletePost = async (id) => {
  const result = await baseApi.delete(`/${id}`);
  return result.data;
};

const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
  });
};

export { useDeletePost };
