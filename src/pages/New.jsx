import React from 'react';
import Container from '../components/Container';
import { useForm } from 'react-hook-form';
import { useCreatePost } from '../services/createPost';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const { mutateAsync, error, isLoading } = useCreatePost();
  const onSubmit = async (values) => {
    const { title, content, category, image } = values;
    const userInput = {
      title,
      content,
      category,
      image,
    };
    console.log('++++++++++++++', userInput);
    mutateAsync(userInput);
    navigate(-1);
  };

  if (isLoading) {
    return <h1>loading..</h1>;
  }
  return (
    <div className='flex flex-row justify-center itmes-center'>
      <div className='grid grid-cols-1 p-5 gap-4 auto-cols-max'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class='mb-6'>
            <label
              for='Title'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Title
            </label>
            <input
              type='text'
              id='title'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Title'
              {...register('title', { required: true })}
            />
          </div>
          <div class='mb-6'>
            <label
              for='Content'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Content
            </label>
            <input
              type='text'
              id='content'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Content'
              {...register('content', { required: true })}
            />
          </div>
          <div class='mb-6'>
            <label
              for='category'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Category
            </label>
            <input
              type='text'
              id='category'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Category'
              {...register('category', { required: true })}
            />
          </div>
          <div class='mb-6'>
            <label
              for='image'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Image
            </label>
            <input
              type='text'
              id='image'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Image'
              {...register('image', { required: true })}
            />
          </div>

          <button
            type='submit'
            class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default New;
