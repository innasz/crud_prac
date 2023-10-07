import React from 'react';
import { useFetchPosts } from '../services/fetchPosts';
import Container from '../components/Container';
import CardView from '../components/CardView';

const Main = () => {
  const { data, isLoading, error } = useFetchPosts();
  if (isLoading) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }

  return (
    <Container>
      {data?.map((post, index) => (
        <CardView data={post} key={index} />
      ))}
    </Container>
  );
};

export default Main;
