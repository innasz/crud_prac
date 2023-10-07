import React from 'react';
import { useFetchPosts } from '../services/fetchPosts';
import Container from '../components/Container';
import CardView from '../components/CardView';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const { data, isLoading, error } = useFetchPosts();
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }

  return (
    <div>
      <button
        type='button'
        onClick={() => navigate('/new')}
        class='bg-gray-800 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        제품등록하기
      </button>
      <Container>
        {data?.map((post, index) => (
          <CardView data={post} key={index} />
        ))}
      </Container>
    </div>
  );
};

export default Main;
