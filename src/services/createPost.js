import { useQueryClient, useMutation } from '@tanstack/react-query';
import baseApi from './api';
const createPost = async (userInput) => {
  const response = await baseApi.post('/', userInput);
  return response.data.data;
};

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userInput) => createPost(userInput),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
  });
};
export { useCreatePost };
